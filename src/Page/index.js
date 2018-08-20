import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Cover from '../Cover'
import Navigation from '../Navigation'
import Header from '../Header'
import Title from '../Title'
import DateTime from '../DateTime'
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

const Page = ({ children, to, toTitle, title, datetime }) => (
  <PageStyled>
    <Cover>
      <Navigation to={to} toTitle={toTitle} />
      <Header>
        <Title title={title} />
        {datetime && <DateTime />}
      </Header>
    </Cover>

    {children}

    <Footer />
  </PageStyled>
)

Page.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  toTitle: PropTypes.string,
  title: PropTypes.string,
  datetime: PropTypes.bool
}

export default Page
