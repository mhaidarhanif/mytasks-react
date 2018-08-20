import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ children }) => <div>{children}</div>

Page.propTypes = {
  children: PropTypes.element.isRequired
}

export default Page
