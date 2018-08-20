import React from 'react'
import PropTypes from 'prop-types'

import TaskStyled from './TaskStyled'
import Action from '../Action'
import TaskText from '../TaskText'

const Task = ({ task }) => (
  <TaskStyled>
    <Action completed={task.completed} />
    <TaskText completed={task.completed} text={task.text} />
  </TaskStyled>
)

Task.propTypes = {
  task: PropTypes.object
}

export default Task
