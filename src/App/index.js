import React from 'react'

import Page from '../Page'
import Cover from '../Cover'
import Header from '../Header'
import Todos from '../Todos'
import Footer from '../Footer'

const App = () => (
  <Page>
    <Cover>
      <Header />
    </Cover>
    <Todos />
    <Footer />
  </Page>
)

export default App
