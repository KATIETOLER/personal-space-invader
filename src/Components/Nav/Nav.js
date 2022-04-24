import React from 'react'
import './Nav.css'
import rocket from '../../images/startup.png'
import { Route, NavLink, Switch } from 'react-router-dom'

const Nav = () => {
	return (
		<nav id='nav'>
			<NavLink to='/'>
				<div className='imgs'>
					<img src={rocket} alt='rocket' id='rocket' />
					<img src={rocket} alt='rocket' id='rocket2' />
				</div>
			</NavLink>
			<NavLink to='/my-monster'>
				<button className='nav-btn' id='myMonster'>
					My Monster
				</button>
			</NavLink>
			<NavLink to='/home'>
				<button id='choose' className='nav-btn'>
					Choose
				</button>
			</NavLink>
			<NavLink to='/care'>
				<button id='care' className='nav-btn'>
					Feed & Care
				</button>
			</NavLink>
		</nav>
	)
}

export default Nav
