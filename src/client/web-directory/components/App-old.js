import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import AddTodo from './AddTodo'
import TodoList from './TodoList'


class App extends React.Component {

  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
      </div>
    )
  }
}

export default App