import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ children }) => <div>{children}</div>

Page.propTypes = {
  children: PropTypes.array.isRequired
}

export default Page
