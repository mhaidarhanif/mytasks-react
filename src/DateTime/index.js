import React from 'react'
import PropTypes from 'prop-types'

const DateTime = ({ value }) => <div>{value}</div>

DateTime.propTypes = {
  value: PropTypes.string.isRequired
}

export default DateTime
