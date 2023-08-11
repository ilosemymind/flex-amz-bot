interface Profile {
	email: string,
	name: string,
	telegramId: string,
	isAmazonConnected: boolean,
	isBotRunning: 0 | 1,
	settings: {
		tapInterval: { from: number, to: number },
		autoStop: 0 | 1
	}
}

export default Profile;