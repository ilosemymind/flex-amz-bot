interface Filter {
	readonly id: number,
	filterName: string,
	filterValue: {
		daysAndTime: { 
			mon: { from?: string, to?: string }, 
			tue: { from?: string, to?: string }, 
			wed: { from?: string, to?: string }, 
			thur: { from?: string, to?: string }, 
			fri: { from?: string, to?: string }, 
			sat: { from?: string, to?: string }, 
			sun: { from?: string, to?: string } 
		}, 
		payPerHour: { duration: string, pay: number }[], 
		serviceIds: string[], 
		timeToArrive: number, 
		isOn: boolean
	}
}

export interface FilterServiceArea {
	readonly serviceAreaAbbr: string 
	readonly serviceAreaId: string
	readonly serviceAreaName: string
}

export default Filter;