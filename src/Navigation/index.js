import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import IconTask from './assets/task.svg'
import IconAccount from './assets/account.svg'

const Nav = styled.nav`
  align-items: center;
  display: flex;
  margin: 0;
  position: fixed;
  right: 10px;
  top: 10px;
`

const NavContent = styled.span`
  align-items: center;
  display: flex;
`

const EmailStyled = styled.span`
  color: #fff;
  font-size: 0.8em;
  margin-right: 10px;
`

const MenuImage = styled.img`
  width: 30px;
  height: 30px;

  &:hover {
    opacity: 0.5;
    transition: 200ms;
  }
`

const Navigation = ({ to, toTitle, email = 'name@example.com' }) => (
  <Nav>
    <Link to={to}>
      <NavContent>
        <EmailStyled>{email}</EmailStyled>
        <MenuImage
          alt={toTitle}
          title={toTitle}
          src={toTitle === 'Home' ? IconTask : IconAccount}
        />
      </NavContent>
    </Link>
  </Nav>
)

Navigation.propTypes = {
  email: PropTypes.string
}

export default Navigation
