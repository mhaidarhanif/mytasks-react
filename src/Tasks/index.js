import React from 'react'

import DATA_TASKS from './data.json'
import TasksStyled from './TasksStyled'

import Task from '../Task'

class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: DATA_TASKS
    }

    this.handleComplete = this.handleComplete.bind(this)
  }

  handleComplete(id) {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })

    this.setState({
      tasks: newTasks
    })
  }

  render() {
    return (
      <TasksStyled tasks={this.state.tasks}>
        {this.state.tasks.map(task => {
          return (
            <Task
              key={task.id}
              task={task}
              handleComplete={() => this.handleComplete(task.id)}
            />
          )
        })}
      </TasksStyled>
    )
  }
}

export default Tasks
