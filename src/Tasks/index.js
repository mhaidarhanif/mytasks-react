import React from 'react'

import DATA_TASKS from './data.json'

import TasksStyled from './TasksStyled'

class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: DATA_TASKS
    }
  }

  handleComplete(event) {
    const newTasks = event.target

    this.setState({
      tasks: newTasks
    })
  }

  render() {
    return <TasksStyled tasks={this.state.tasks} />
  }
}

export default Tasks
