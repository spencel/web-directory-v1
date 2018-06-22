import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'


const App = () => (
  <div className='App'>
    <AddTodoContainer />
    <TodoListContainer />
  </div>
)

export default App