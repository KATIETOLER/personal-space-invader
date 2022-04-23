const fetchData = {
	fetchMonsters() {
		return fetch(
			'https://bf07a96b-9a4f-4123-ac71-22d6f6d2a09c.mock.pstmn.io/api/basic/monsters'
		).then((res) => res.json())
	},
}

export default fetchData
