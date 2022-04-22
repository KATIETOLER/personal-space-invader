import React, { Component } from 'react'
import './Monster.css'
import fetchData from '../../api-calls'
import monsterData from '../../data'

class Monster extends Component {
	constructor() {
		super()
		this.state = {
			allMonsters: [],
			currentMonster: '',
			favMonster: '',
			error: '',
			food: 0,
		}
	}
	componentDidMount() {
		fetchData
			.fetchMonsters()
			.then((data) => this.setState({ allMonsters: data.results }))
			.catch((error) => this.setState({ error: error }))
	}
	// showRandomMonster = (monsterData) => {
	// 	let i = Math.floor(Math.random() * monsterData.results.length)
	// 	return monsterData.results[i].svgContent
	// }
	feedMonster(event) {
		event.preventDefault()
		if (this.state.food <= 9) {
			this.setState({ food: this.state.food + 1 })
		}
	}

	render() {
		return (
			<div className='monster-container'>
				{this.state.allMonsters[0] && (
					<div
						className='mon'
						dangerouslySetInnerHTML={{
							__html: this.state.allMonsters[0].svgContent,
						}}></div>
				)}
				---- Monster image should be here ----
				<div className='food-container'>
					<button onClick={(event) => this.feedMonster(event)}>feed</button>
					<div className='food'>Food Counter: {this.state.food}</div>
					{this.state.food > 6 && <p>Don't overfeed your monster, please!</p>}
				</div>
			</div>
		)
	}
}

export default Monster
