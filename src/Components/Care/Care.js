import React from 'react'
import './Care.css'

const Care = () => {
	return (
		<div className='care'>
			<h4 className='food'>Food</h4>
			<div>
				Feed 1-2 days, and allow your monster to digest its meal. Expect to feed
				more often if your monster is particularly large or has more red
				coloring.
				<div>
					Pro tip: Never ever ever ever feed your monster more than 9 times in a
					day; <div className='overfeed'>it can be fatal.</div>
				</div>
			</div>
			<h4 className='water'>Water</h4>
			<div>
				Water every 1-2 weeks, allowing them to to dry out between waterings.
				Expect to water more often in brighter light and less often in lower
				light. Pro tip: Monsters can benefit from filtered water or water left
				out overnight before using.
			</div>
			<h4 className='humidity'>Humidity</h4>
			<div>
				Normal room humidity will do, but prefers humid conditions if possible.
				Consider incorporating a fine-mist mister or humidifier to boost
				humidity level indoors.
			</div>
			<h4 className='temp'>Temperature</h4>
			<div>
				Most monsters prefer temps in the 65°F-85°F range (18°C-30°C). It is
				best not to let it go below 60°F (15°C). Most monster lovers find that
				more often than not computers will provide ample warmth for their
				monster.
			</div>
		</div>
	)
}

export default Care
