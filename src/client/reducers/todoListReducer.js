import {
  FETCH_TODOLIST_BEGIN,
  FETCH_TODOLIST_SUCCESS,
  FETCH_TODOLIST_FAIL
} from '../actions/todoList'

const initialState = {
  todoList: [],
  loading: false,
  error: null
}

export default function todoListReducer( state = initialState, action ) {
  console.log( 'reducers/todoList.js: todoList:' )
  console.log( 'action:' )
  console.log( action )
  console.log( 'state:' )
  console.log( state )
  switch( action.type ) {
    case FETCH_TODOLIST_BEGIN:
      console.log( 'FETCH_TODOLIST_BEGIN' )
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_TODOLIST_SUCCESS:
      console.log( 'FETCH_TODOLIST_SUCCESS' )
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        todoList: action.todoList
      }

    case FETCH_TODOLIST_FAIL:
    console.log( 'FETCH_TODOLIST_FAIL' )
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

    default:
      console.log( 'todoReducer: default' )
      // ALWAYS have a default case in a reducer
      return state;
  }
}