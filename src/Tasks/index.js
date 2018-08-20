import React from 'react'

import DATA_TASKS from './data.json'

import Task from '../Task'

const Tasks = () => (
  <div>
    {DATA_TASKS.map(task => {
      return <Task key={task.id} task={task} />
    })}
  </div>
)

export default Tasks
