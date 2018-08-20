import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleStyled = styled.h1`
  font-family: 'Roboto Slab', serif;
  font-weight: 700;
  margin: 30px 0;
`

const Title = ({ title = 'Default' }) => <TitleStyled>{title}</TitleStyled>

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
