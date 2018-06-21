import { combineReducers } from 'redux'
import todoList from './todoList'
import addTodo from './addTodo'

const rootReducer = combineReducers({
  todoList,
  addTodo
})

export default rootReducer