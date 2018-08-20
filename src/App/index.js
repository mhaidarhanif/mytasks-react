import React from 'react'
import styled from 'styled-components'

import Page from '../Page'
import Cover from '../Cover'

import Todos from '../Todos'
import Footer from '../Footer'

const AppStyled = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  margin: 0;
`

const App = () => (
  <AppStyled>
    <Page>
      <Cover />
      <Todos />
      <Footer />
    </Page>
  </AppStyled>
)

export default App
