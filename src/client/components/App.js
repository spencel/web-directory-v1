import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import TodoList from './TodoList'


class App extends React.Component {

  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

export default App