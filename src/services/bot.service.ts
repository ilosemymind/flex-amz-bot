import axiosInstance from "@/plugins/axios"

export default {
	startBot: async () => {
		const { data } = await axiosInstance.get(`/user`);

		return data;
	},

	stopBot: async () => {
		const { data } = await axiosInstance.get(`/user`);

		return data;
	}
}