import React from 'react'
import PropTypes from 'prop-types'

import TaskStyled from './TaskStyled'
import Action from '../Action'
import TaskText from '../TaskText'

const Task = ({ task, handleComplete }) => (
  <TaskStyled>
    <Action completed={task.completed} handleComplete={handleComplete} />
    <TaskText completed={task.completed} text={task.text} />
  </TaskStyled>
)

Task.propTypes = {
  task: PropTypes.object,
  handleComplete: PropTypes.func
}

export default Task
