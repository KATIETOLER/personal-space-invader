import React, { Component } from 'react'
import './Monster.css'
import fetchData from '../../api-calls'
import monsterData from '../../data'
import FavMonster from '../FavMonster/FavMonster'
import { Route, NavLink, Switch } from 'react-router-dom'

class Monster extends Component {
	constructor() {
		super()
		this.state = {
			allMonsters: [],
			currentMonster: '',
			favMonster: '',
			food: 0,
			isDead: false,
			error: '',
		}
	}
	componentDidMount() {
		fetchData
			.fetchMonsters()
			.then((data) => this.setState({ allMonsters: data.results }))
			.then(() => this.showRandomMonster(this.state.allMonsters))
			.catch((error) => this.setState({ error: error }))
	}
	showRandomMonster = (array) => {
		let i = Math.floor(Math.random() * array.length)
		this.setState({ currentMonster: array[i] })
	}
	feedMonster(event) {
		event.preventDefault()
		if (this.state.food <= 9) {
			this.setState({ food: this.state.food + 1 })
		}
		if (this.state.food >= 9) {
			this.setState({ isDead: true })
		}
	}
	addMonster(monster) {
		this.setState({ favMonster: monster })
	}
	render() {
		return (
			<div className='monster-container'>
				<div className='food-container'>
					{this.state.food <= 9 && (
						<button onClick={(event) => this.feedMonster(event)}>feed</button>
					)}
					{this.state.food >= 10 && (
						<div className='overfeed'>
							your monster
							<br></br>
							<p>has died...</p>{' '}
						</div>
					)}

					{this.state.food <= 9 && (
						<div className='food'>Food Counter: {this.state.food}</div>
					)}
					{this.state.food > 6 ? (
						<div className='overfeed'>
							Don't overfeed <p>your monster,</p>
							<p>please!</p>
						</div>
					) : (
						<p>...</p>
					)}
				</div>
				<div className='monster-img-container'>
					{this.state.currentMonster && (
						<div
							className='mon'
							dangerouslySetInnerHTML={{
								__html: this.state.currentMonster.svgContent,
							}}></div>
					)}
				</div>
				<div className='monster-chooser-container'>
					{!this.state.isDead && (
						<button onClick={() => this.addMonster(this.state.currentMonster)}>
							Choose This Monster
						</button>
					)}
					<div className='congrats'>
						{this.state.favMonster && (
							<div className='con'>
								<p>congratuations!</p>
								<p>you have a new friend.</p>{' '}
							</div>
						)}
					</div>
				</div>

				<Route
					exact
					path='/my-monster'
					render={() => (
						<FavMonster
							currentMonster={this.state.currentMonster}
							favMonster={this.state.favMonster}
						/>
					)}
				/>
			</div>
		)
	}
}

export default Monster
