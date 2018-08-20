import React from 'react'
import { Set } from 'immutable'

import Tasks from '../Tasks'
import FormTaskAdd from '../FormTaskAdd'

import DATA from './data.json'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.handleComplete = this.handleComplete.bind(this)
    this.handleAdd = this.handleAdd.bind(this)

    this.state = {
      tasks: Set(DATA.tasks),
      counter: DATA.counter
    }
  }

  handleComplete(id) {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
    })
  }

  handleAdd(text) {
    this.setState({
      counter: this.state.counter + 1,
      tasks: this.state.tasks.add({
        text,
        id: this.state.counter + 1,
        created: new Date(),
        completed: false
      })
    })
  }

  render() {
    return (
      <div>
        <Tasks handleComplete={this.handleComplete} tasks={this.state.tasks} />
        <FormTaskAdd handleAdd={this.handleAdd} />
      </div>
    )
  }
}

export default Home
