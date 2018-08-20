import React from 'react'
import styled from 'styled-components'

import Title from '../Title'
import DateTime from '../DateTime'

const HeaderStyled = styled.div`
  color: #fff;
  padding: 10px 30px;
  transition: 200ms;
`

const Header = () => (
  <HeaderStyled>
    <Title value="MyTasks" />
    <DateTime />
  </HeaderStyled>
)

export default Header
