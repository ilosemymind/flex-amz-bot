import axiosInstance from "@/plugins/axios"

import Filter, { FilterServiceArea } from "@/types/Filter";

export default {
	getFilters: async () => {
		const { data } = await axiosInstance.get(`/filters`);

		return data;
	},

	getFilterServiceAreas: async () => {
		const { data }: { data: FilterServiceArea[] } = await axiosInstance.get(`/services`);

		return data;
	},

	getFilter: async (payload: { id: number }) => {
		const { data } = await axiosInstance.get(`/filter?id=${payload.id}`);

		return data;
	},

	addFilter: async (payload: { filter: Filter }) => {
		console.log(payload, 'add filter payload');

		const { data } = await axiosInstance.post(`/filter`, payload.filter);

		return data;
	},

	editFilter: async (payload: { filter: Filter }) => {
		const { data } = await axiosInstance.put(`/filter`, payload.filter);

		return data;
	},

	deleteFilter: async (payload: { id: number }) => {
		const response = await axiosInstance.delete(`/filter`, { 
			data: {
				id: payload.id
			}
		});

		return response;
	}
}