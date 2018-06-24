import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import Mom from './Mom'


const App = () => (
  <div className='App'>
    <Mom />
    <AddTodoContainer />
    <TodoListContainer />
  </div>
)

export default App