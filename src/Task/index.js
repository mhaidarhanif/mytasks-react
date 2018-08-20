import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TaskStyled = styled.div``

const Task = ({ text }) => <TaskStyled>{text}</TaskStyled>

Task.propTypes = {
  text: PropTypes.string
}

export default Task
