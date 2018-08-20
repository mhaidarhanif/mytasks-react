import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  color: #fff;
  padding: 10px 30px;
  transition: 200ms;
`

const Header = ({ children }) => <HeaderStyled>{children}</HeaderStyled>

Header.propTypes = {
  children: PropTypes.node
}

export default Header
