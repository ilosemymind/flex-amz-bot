import axiosInstance from "@/plugins/axios"

export default {
	getProfile: async () => {
		const { data } = await axiosInstance.get(`/user`);

		return data;
	}
}