const fetchData = {
	fetchMonsters() {
		return fetch(
			'https://bf07a96b-9a4f-4123-ac71-22d6f6d2a09c.mock.pstmn.io/api/basic/monsters'
		).then((response) => {
			if (!response.ok) {
				if (response.status >= 500) {
					throw new Error(`This does not exist.`)
				} else if (response.status === 404) {
					throw new Error(`Oh no! This monster was not found.`)
				} else {
					throw new Error(`Please return home and try again.`)
				}
			}
			return response.json()
		})
	},
}

export default fetchData
