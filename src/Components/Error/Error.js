import React from 'react'
import PropTypes from 'prop-types'
import './Error.css'

const Error = ({ error }) => {
	return <div className='error'>{error}</div>
}

Error.propTypes = {
	error: PropTypes.string,
}

export default Error
