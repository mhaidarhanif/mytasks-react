import React from 'react'
import PropTypes from 'prop-types'

import Page from '../Page'

class PageNotFound extends React.Component {
  render() {
    return (
      <Page to="/" toTitle="Home" title="Not Found">
        <p>Page Not Found for {this.props.location.pathname}</p>
      </Page>
    )
  }
}

PageNotFound.propTypes = {
  location: PropTypes.object
}

export default PageNotFound
