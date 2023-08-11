import axios, { AxiosError, AxiosResponse } from 'axios';
// @ts-ignore
import { camelizeKeys, decamelizeKeys } from "humps";
import authService from '@/services/auth.service';
import Cookies from "js-cookie";

const { VITE_BASE_URL } = import.meta.env;

let formDataCache: FormData | undefined = undefined;

const axiosInstance = axios.create({
	baseURL: VITE_BASE_URL,
})

axiosInstance.interceptors.request.use(
	config => {
		const newConfig = { ...config };

		const accessToken = Cookies.get('accessToken');
		if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

		if (newConfig.headers['Content-Type'] === 'multipart/form-data') {
			const formData = new FormData();

			for (const key in config.data) {
				formData.append(key, config.data[key]);
			}
			config.data = formData;
	
			formDataCache = formData;

			return newConfig;
		}

		if (config.params) newConfig.params = decamelizeKeys(config.params);

		if (config.data) newConfig.data = decamelizeKeys(config.data);

		return newConfig;
	},

	(error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(onResponseFilled, onResponseRejected);

function onResponseFilled(response: AxiosResponse) {
	if (
		response.data &&
		response.headers["content-type"] === "application/json"
	) {
		response.data = camelizeKeys(response.data);
	}

	return response;
}

async function onResponseRejected(error: AxiosError) {
  const originalRequest = error?.config; 
  const statusCode = error?.response?.status; 

	console.log(statusCode);

	if(originalRequest) {
		const refreshToken = Cookies.get('refreshToken');

		// @ts-ignore
		if (statusCode === 401 && !originalRequest._retry && refreshToken) {
			// @ts-ignore
			originalRequest._retry = true;
			Cookies.remove('accessToken');

			try {
				const response: { accessToken: string } = 
					await authService.refreshToken({ refreshToken: refreshToken });

				console.log(response, 'refreshed access token response');

				Cookies.set('accessToken', response.accessToken, { 
					secure: true, 
					sameSite: 'strict',
					path: '/',
					expires: 1 / 96 // 15 min
				});
				
				// @ts-ignore
				originalRequest.sent = true;
				originalRequest.headers['Authorization'] = `Bearer ${response.accessToken}`;
			} catch(error) {
				Cookies.remove('refreshToken');
				window.location.href = "/login";
			}

			if (formDataCache) {
				originalRequest.data = formDataCache;
				formDataCache = undefined;
			}

			return axiosInstance({
				...originalRequest,
				headers: originalRequest.headers.toJSON(),
			});
		}
	}

  return Promise.reject(error);
}

export default axiosInstance;
