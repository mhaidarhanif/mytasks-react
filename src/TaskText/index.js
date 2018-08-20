import React from 'react'
import PropTypes from 'prop-types'

import TaskTextStyled from './TaskTextStyled'

const TaskText = ({ text }) => <TaskTextStyled>{text}</TaskTextStyled>

TaskText.propTypes = {
  text: PropTypes.string
}

export default TaskText
