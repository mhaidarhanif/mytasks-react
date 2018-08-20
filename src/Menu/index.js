import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MenuStyled = styled.div`
  &:hover {
    transition: 200ms;
    opacity: 0.5;
  }
`

const Menu = () => <MenuStyled />

Menu.propTypes = {
  completed: PropTypes.boolean
}

export default Menu
