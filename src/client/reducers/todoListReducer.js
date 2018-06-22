import {
  FETCH_TODOLIST_BEGIN,
  FETCH_TODOLIST_SUCCESS,
  FETCH_TODOLIST_FAIL
} from '../actions/todoList'
import {
  PUSH_TODOLIST
} from '../actions/addTodo'

const initialState = {
  todoList: [],
  loading: false,
  error: null
}

export default function todoListReducer( state = initialState, action ) {
  switch( action.type ) {
    case FETCH_TODOLIST_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_TODOLIST_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      console.log( state )
      return {
        ...state,
        loading: false,
        todoList: action.todoList
      }

    case FETCH_TODOLIST_FAIL:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have items to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the items
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.error,
        todoList: []
      }
    case PUSH_TODOLIST:
      console.log( PUSH_TODOLIST )
      console.log( state.todoList )
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.json
        ]
      }
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}