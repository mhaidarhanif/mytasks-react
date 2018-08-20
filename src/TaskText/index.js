import React from 'react'
import PropTypes from 'prop-types'

import TaskTextStyled from './TaskTextStyled'

const TaskText = ({ text, completed }) => (
  <TaskTextStyled completed={completed}>{text}</TaskTextStyled>
)

TaskText.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string
}

export default TaskText
