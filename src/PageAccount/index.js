import React from 'react'

import Page from '../Page'
import FormAuth from '../FormAuth'

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
        <FormAuth />
      </Page>
    )
  }
}

export default PageAccount
