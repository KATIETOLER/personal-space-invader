import React from 'react'
import './FavMonster.css'
import Monster from '../Monster/Monster'

const FavMonster = ({ currentMonster, FavMonster }) => {
	console.log('favmon atasdf favmon???', FavMonster)
	return (
		<div className='favMonster-container'>
			{!FavMonster && (
				<div>
					{' '}
					sorry no monster yet! click the rocketship to go home and choose one!
				</div>
			)}
			{/* <div
				className='mon'
				dangerouslySetInnerHTML={{
					__html: FavMonster.svgContent,
				}}></div> */}
		</div>
	)
}

export default FavMonster
