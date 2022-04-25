import React, { Component } from 'react'
import './Monster.css'
import dead from '../../images/shakespeare.png'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

class Monster extends Component {
	constructor({ currentMonster, addMonster, deleteMonster, favMonster }) {
		super()
		this.state = {
			currentMonster: this.currentMonster,
			food: 0,
			isDead: false,
		}
	}
	feedMonster(event) {
		event.preventDefault()
		if (this.state.food <= 9) {
			this.setState({ food: this.state.food + 1 })
		}
		if (this.state.food >= 9) {
			this.setState({ isDead: true })
			this.setState({ favMonster: '' })
		}
	}
	render() {
		return (
			<div className='monster-container'>
				<div className='food-container'>
					{this.state.food >= 10 && (
						<div id='dead' className='overfeed'>
							your monster
							<br></br>
							<p>has died...</p>{' '}
						</div>
					)}

					{this.state.food > 6 && !this.state.isDead && (
						<div id='dontOverfeed' className='overfeed'>
							Don't overfeed <p>your monster,</p>
							<p>please!</p>
						</div>
					)}
					{this.state.food <= 9 && (
						<button id='feedBtn' onClick={(event) => this.feedMonster(event)}>
							feed
						</button>
					)}

					{this.state.food <= 9 && (
						<div className='food'>Food Counter: {this.state.food}</div>
					)}
				</div>
				<div className='monster-img-container'>
					{this.props.currentMonster && !this.state.isDead && (
						<div
							className='mon'
							dangerouslySetInnerHTML={{
								__html: this.props.currentMonster.svgContent,
							}}></div>
					)}
					{this.state.isDead && this.state.food >= 10 && (
						<div className='dead-img'>
							<img src={dead} alt='yorick skull' id='dead' />
						</div>
					)}
				</div>
				<div className='monster-chooser-container'>
					{!this.state.isDead && this.state.food < 10 && (
						<button
							id='monsterChooserBtn'
							onClick={() => this.props.addMonster(this.props.currentMonster)}>
							Choose This Monster
						</button>
					)}
					<div className='congrats'>
						{this.state.isDead && (
							<NavLink to='/home'>
								<button
									className='try-again'
									onClick={() => window.location.reload()}>
									Try Again?
								</button>
							</NavLink>
						)}
						{this.props.favMonster && !this.state.isDead && (
							<div className='con'>
								<p>congratulations!</p>
								<p>you have a new friend.</p>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}
}

Monster.propTypes = {
	deleteMonster: PropTypes.func,
	addMonster: PropTypes.func,
	favMonster: PropTypes.any.isRequired,
	currentMonster: PropTypes.any.isRequired,
}

export default Monster
