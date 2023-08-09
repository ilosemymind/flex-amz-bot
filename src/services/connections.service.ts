import axiosInstance from "@/plugins/axios"

export default {
	getTelegramLink: async () => {
		const { data } = await axiosInstance.get(`/tg_link`);

		return data;
	},

	connectAmazon: async (payload: { link: string }) => {
		const { data } = await axiosInstance.post(`/amazon`, payload);

		return data;
	}
}