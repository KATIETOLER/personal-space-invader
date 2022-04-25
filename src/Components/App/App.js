import React, { Component } from 'react'
import './App.css'
import Monster from '../Monster/Monster'
import { Route, NavLink, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import arrow from '../../images/right-arrow.png'
import FavMonster from '../FavMonster/FavMonster'
import Care from '../Care/Care'
import fetchData from '../../api-calls'
import Error from '../Error/Error'
import PropTypes from 'prop-types'

class App extends Component {
	constructor() {
		super()
		this.state = {
			allMonsters: [],
			favMonster: '',
			currentMonster: '',
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
	addMonster = (monster) => {
		this.setState({ favMonster: monster })
	}
	deleteMonster = () => {
		this.setState({ favMonster: null })
	}
	render() {
		return (
			<main>
				{this.state.error && <Error error={this.state.error} />}
				<Nav />
				<Switch>
					<Route exact path='/'>
						<header className='App'>
							<h1 className='welcome'>Welcome</h1>
							<h4 id='invader-space'>to your personal space invader</h4>
							<p id='space'>space</p>
						</header>
						<NavLink to='/home'>
							<button className='friend-select'>
								{' '}
								Select a friend
								<img src={arrow} alt='arrow' id='arrow' />{' '}
							</button>
						</NavLink>
					</Route>
					<Route
						exact
						path='/home'
						render={() => (
							<Monster
								addMonster={this.addMonster}
								deleteMonster={this.deleteMonster}
								currentMonster={this.state.currentMonster}
								favMonster={this.state.favMonster}
							/>
						)}
					/>
					<Route exact path='/care' render={() => <Care />} />
					<FavMonster
						favMonster={this.state.favMonster}
						deleteMonster={this.deleteMonster}
					/>
				</Switch>
			</main>
		)
	}
}

export default App
