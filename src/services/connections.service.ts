import axiosInstance from "@/plugins/axios"

export default {
	getTelegramLink: async () => {
		const { data } = await axiosInstance.get(`/user`);

		return data;
	},

	connectAmazon: async () => {
		const { data } = await axiosInstance.get(`/user`);

		return data;
	}
}