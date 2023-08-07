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

		console.log(data);

		if(data.accessToken) Cookies.set('accessToken', data.accessToken);
		if(data.refreshToken) Cookies.set('refreshToken', data.refreshToken);
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

		if(data.accessToken) Cookies.set('accessToken', data.accessToken);
		if(data.refreshToken) Cookies.set('refreshToken', data.refreshToken);
	},

	refreshToken: async (payload: { [key: string]: unknown } = {}) => {
		const { data } = await axiosInstance.post(`/refresh`, {
			refreshToken: payload.refreshToken
		}, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return data;
	},

	resetPassword: (payload = {}) => {
		console.log('reset password', payload);
	}
}