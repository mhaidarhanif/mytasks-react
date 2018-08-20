import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PageStyled = styled.main`
  border: 4px solid #333;
  min-height: 360px;
  min-width: 100px;
`

const Page = ({ children }) => <PageStyled>{children}</PageStyled>

Page.propTypes = {
  children: PropTypes.array.isRequired
}

export default Page
