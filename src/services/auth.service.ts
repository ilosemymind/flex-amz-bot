import axiosInstance from '@/plugins/axios';
import Cookies from "js-cookie";

type RegistrationPayload = {
	username: string
	email: string
	phone: string
	password: string
}

type LoginPayload = {
	email: string
	password: string
}

export default {
	register: async (payload: RegistrationPayload) => {
		const { data } = await axiosInstance.post(`/register`, {
			username: payload.username,
			email: payload.email,
			password: payload.password
		}, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if(data.accessToken) Cookies.set('accessToken', data.accessToken, { 
			secure: true, 
			sameSite: 'strict',
			path: '/',
			expires: 1 / 96 // 15 min
		});

		if(data.refreshToken) Cookies.set('refreshToken', data.refreshToken, { 
			secure: true, 
			sameSite: 'strict',
			path: '/',
			expires: 7 // 7 days
		});
	},

	login: async (payload: LoginPayload) => {
		const { data } = await axiosInstance.post(`/login`, {
			email: payload.email,
			password: payload.password
		}, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if(data.accessToken) Cookies.set('accessToken', data.accessToken, { 
			secure: true, 
			sameSite: 'strict',
			path: '/',
			expires: 1 / 96 // 15 min
		});
		
		if(data.refreshToken) Cookies.set('refreshToken', data.refreshToken, { 
			secure: true, 
			sameSite: 'strict',
			path: '/',
			expires: 7 // 7 days
		});
	},

	refreshToken: async (payload: { refreshToken: string }) => {
		console.log(payload.refreshToken, 'payload.refreshToken');

		const { data } = await axiosInstance.post(`/refresh`, {
			refreshToken: payload.refreshToken
		}, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		console.log(data, 'refresh token data');

		return data;
	},

	resetPassword: (payload = {}) => {
		console.log('reset password', payload);
	},

	logout() {
		Cookies.remove('accessToken');
		Cookies.remove('refreshToken');
	}
}