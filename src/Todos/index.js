import React from 'react'

import DATA_TODOS from './data.json'

import Todo from '../Todo'

const Todos = () => (
  <div>
    {DATA_TODOS.map(todo => {
      return <Todo key={todo.id} text={todo.text} />
    })}
  </div>
)

export default Todos
