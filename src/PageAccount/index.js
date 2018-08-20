import React from 'react'

import Page from '../Page'

class PageAccount extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      register: {},
      login: {}
    }
  }

  render() {
    return (
      <Page to="/" toTitle="Home" title="Account">
        <p>Page Account</p>
      </Page>
    )
  }
}

export default PageAccount
