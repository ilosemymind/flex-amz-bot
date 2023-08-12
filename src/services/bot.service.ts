import axiosInstance from "@/plugins/axios"

export default {
	setInterval: async (payload: { from: number, to: number }) => {
		const response = await axiosInstance.post(`/tap_interval`, {
			fromInterval: payload.from,
			toInterval: payload.to
		});

		return response;
	},

	toggleAutoStop: async () => {
		const response = await axiosInstance.get(`/auto_stop`);

		return response;
	},

	startBot: async () => {
		const response = await axiosInstance.get(`/start_bot`);

		return response;
	},

	stopBot: async () => {
		const response = await axiosInstance.get(`/stop_bot`);

		return response;
	}
}