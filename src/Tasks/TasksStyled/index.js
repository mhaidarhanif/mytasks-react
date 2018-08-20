import React from 'react'
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

export default TasksStyled
