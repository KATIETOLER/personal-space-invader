const fetchData = {
	fetchMonsters() {
		return fetch('https://app.pixelencounter.com/api/basic/monsters').then(
			(res) => res.json()
		)
	},
}

export default fetchData
