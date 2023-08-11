import axiosInstance from "@/plugins/axios"

export default {
	getProfile: async () => {
		try {
			const { data } = await axiosInstance.get(`/user`);

			return data;
		} catch(error) {
			console.log(error);
		}
	}
}