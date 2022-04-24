import React, { Component } from 'react'
import './FavMonster.css'

class FavMonster extends Component {
	constructor({ favMonster }) {
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
				{!this.props.favMonster && (
					<div>
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
						<form>
							<label name='name'>Name your monster--</label>
							<input
								name='name'
								type='text'
								placeholder='Name'
								value={this.state.name}
								onChange={(event) => this.handleChange(event)}></input>
							<button onClick={(event) => this.submit(event)}>submit</button>
						</form>
					)}
				</div>
				<div
					className='mon'
					dangerouslySetInnerHTML={{
						__html: this.props.favMonster.svgContent,
					}}></div>
			</div>
		)
	}
}

export default FavMonster
