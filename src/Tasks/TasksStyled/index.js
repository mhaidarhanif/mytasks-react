import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Task from '../../Task'

const Styled = styled.div``

const TasksStyled = ({ tasks }) => (
  <Styled>
    {tasks.map(task => {
      return <Task key={task.id} task={task} />
    })}
  </Styled>
)

TasksStyled.propTypes = {
  tasks: PropTypes.array
}

export default TasksStyled
