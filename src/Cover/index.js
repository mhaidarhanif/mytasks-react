import React from 'react'
import PropTypes from 'prop-types'

const Cover = ({ children }) => <div>{children}</div>

Cover.propTypes = {
  children: PropTypes.element.isRequired
}

export default Cover
