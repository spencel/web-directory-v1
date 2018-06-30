import {
  FETCH_ADDTODO_BEGIN,
  FETCH_ADDTODO_SUCCESS,
  FETCH_ADDTODO_FAIL
} from '../actions/addTodo'

const initialState = {
  loading: false,
  error: null,
  text: 'test'
}

export default function addTodoReducer( state = initialState, action ) {
  switch( action.type ) {
    case FETCH_ADDTODO_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_ADDTODO_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      console.log( state )
      return {
        ...state,
        loading: false,
        text: ''
      }

    case FETCH_ADDTODO_FAIL:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have items to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the items
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}