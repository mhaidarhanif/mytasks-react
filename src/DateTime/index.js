import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'

const DateTimeStyled = styled.h2`
  font-size: 1em;
  font-weight: 400;
  margin: 10px 0;
`

const DateTime = ({ value = new Date() }) => {
  const valueFormatted = dayjs(value).format('dddd, D MMMM YYYY H:mm')

  return <DateTimeStyled>{valueFormatted}</DateTimeStyled>
}

DateTime.propTypes = {
  value: PropTypes.string.isRequired
}

export default DateTime
