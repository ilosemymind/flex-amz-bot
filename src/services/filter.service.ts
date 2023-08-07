import axiosInstance from "@/plugins/axios"

export default {
	getFilters: async () => {
		const { data } = await axiosInstance.get(`/filters`);

		return data;
	},

	getFilterServices: async () => {
		const { data } = await axiosInstance.get(`/services`);

		return data;
	},

	getFilter: async (payload: { id: number }) => {
		const { data } = await axiosInstance.get(`/filter?id=${payload.id}`);

		return data;
	},

	addFilter: async () => {
		const { data } = await axiosInstance.post(`/filter`);

		return data;
	},

	editFilter: async () => {
		const { data } = await axiosInstance.put(`/filter`);

		return data;
	},

	deleteFilter: async (payload: { id: number }) => {
		const { data } = await axiosInstance.delete(`/filter?id=${payload.id}`);

		return data;
	}
}