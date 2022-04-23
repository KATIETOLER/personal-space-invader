import React, { Component } from 'react'
import './App.css'
import Monster from '../Monster/Monster'
import { Route, NavLink, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import arrow from '../../images/right-arrow.png'
import FavMonster from '../FavMonster/FavMonster'
import Care from '../Care/Care'

class App extends Component {
	constructor() {
		super()
		this.state = {
			monster: '',
			favMonster: '',
		}
	}
	render() {
		return (
			<main>
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
						render={() => <Monster addMonster={this.addMonster} />}
					/>
					<Route exact path='/care' render={() => <Care />} />
					<Route exact path='/my-monster' render={() => <FavMonster />} />
				</Switch>
			</main>
		)
	}
}

export default App
