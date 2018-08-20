import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Cover from '../Cover'
import Footer from '../Footer'

const PageStyled = styled.main`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  margin: 0;
  min-height: 360px;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  color: #333;
`

const Page = ({ children }) => (
  <PageStyled>
    <Cover />
    {children}
    <Footer />
  </PageStyled>
)

Page.propTypes = {
  children: PropTypes.element.isRequired
}

export default Page
