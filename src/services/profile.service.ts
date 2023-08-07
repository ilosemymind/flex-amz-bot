// import axiosInstance from '@/plugins/axios'

import axiosInstance from "@/plugins/axios"

// const { VITE_BASE_URL } = import.meta.env;

export default {
	getProfile: async () => {
		const { data } = await axiosInstance.get(`/user`);

		return data;
	}
}