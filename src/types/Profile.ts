interface Profile {
	email: string,
	name: string,
	telegramId: string,
	isAmazonConnected: boolean,
	isBotRunning: boolean,
	settings: {
		tapInterval: { from: number, to: number },
		autoStop: boolean
	}
}

export default Profile;