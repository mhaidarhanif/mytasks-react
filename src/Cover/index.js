import React from 'react'
import styled from 'styled-components'

import IMAGE_COVER from './assets/cover.jpg'

const CoverStyled = styled.div`
  background: #eee;
  background-image: url('${IMAGE_COVER}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  min-height: 100px;
  min-width: 100px;
`

const Cover = ({ children }) => <CoverStyled>{children}</CoverStyled>

export default Cover
