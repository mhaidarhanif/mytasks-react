import React from 'react'
import styled from 'styled-components'

const NavigationStyled = styled.div`
  align-items: center;
  display: flex;
  margin: 0;
  position: fixed;
  right: 10px;
  top: 10px;
`

const EmailStyled = styled.span`
  color: #fff;
  font-size: 0.8em;
  margin-right: 10px;
`

const Navigation = () => (
  <NavigationStyled>
    <EmailStyled />
  </NavigationStyled>
)

export default Navigation
