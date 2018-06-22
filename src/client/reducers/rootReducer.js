import { combineReducers } from 'redux'
import todoListReducer from './todoListReducer'
import addTodoReducer from './addTodoReducer'

const rootReducer = combineReducers({
  todoListReducer,
  addTodoReducer
})

export default rootReducer