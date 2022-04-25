import React, { Component } from 'react'
import './FavMonster.css'
import PropTypes from 'prop-types'

class FavMonster extends Component {
	constructor({ favMonster, deleteMonster }) {
		super()
		this.state = {
			name: '',
			form: true,
		}
	}
	handleChange = (event) => {
		event.preventDefault()
		this.setState({ [event.target.name]: event.target.value })
		event.target.value = ''
	}

	submit = (event) => {
		this.handleChange(event)
		this.setState({ form: false })
	}

	render() {
		return (
			<div className='favMonster-container'>
				{console.log(typeof this.state.favMonster)}
				{!this.props.favMonster && (
					<div className='sorry-message'>
						{' '}
						sorry no monster yet! click the rocketship to go home and choose
						one!
					</div>
				)}

				<div className='name-container'>
					{this.state.name && !this.state.form && (
						<p className='greeting'>Hello, {this.state.name}</p>
					)}
					{this.state.form && this.props.favMonster && (
						<form className='name-form'>
							<label name='name'>Name your monster--</label>
							<input
								name='name'
								type='text'
								id='name'
								placeholder='Name'
								value={this.state.name}
								onChange={(event) => this.handleChange(event)}></input>
							<button id='submit' onClick={(event) => this.submit(event)}>
								submit
							</button>
						</form>
					)}
				</div>
				{this.props.favMonster && (
					<div
						className='mon'
						dangerouslySetInnerHTML={{
							__html: this.props.favMonster.svgContent,
						}}></div>
				)}
				{this.props.favMonster && (
					<button id='delete' onClick={() => this.props.deleteMonster()}>
						delete?
					</button>
				)}
			</div>
		)
	}
}

export default FavMonster

FavMonster.propTypes = {
	deleteMonster: PropTypes.func,
	favMonster: PropTypes.any.isRequired,
}
