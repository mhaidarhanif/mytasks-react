import React from 'react'
import PropTypes from 'prop-types'

import TasksStyled from './TasksStyled'

import Task from '../Task'

class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: props.tasks
    }
  }

  render() {
    return (
      <TasksStyled tasks={this.props.tasks}>
        {this.props.tasks.map(task => {
          return (
            <Task
              key={task.id}
              task={task}
              handleComplete={() => this.props.handleComplete(task.id)}
            />
          )
        })}
      </TasksStyled>
    )
  }
}

Tasks.propTypes = {
  tasks: PropTypes.object,
  handleComplete: PropTypes.func
}

export default Tasks
