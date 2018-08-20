import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
  margin-top: 20px;
  color: #ccc;
  text-align: center;
`

const Footer = () => (
  <FooterStyled>
    <small>Copright 2018 &copy; MyTasks</small>
  </FooterStyled>
)

export default Footer
