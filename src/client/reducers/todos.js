import {
  FETCH_TODOS_BEGIN,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL
} from '../actions/todos'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default function todos( state = initialState, action ) {
  switch( action.type ) {
    case FETCH_TODOS_BEGIN:
      console.log( 'FETCH_TODOS_BEGIN' )
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_TODOS_SUCCESS:
      console.log( 'FETCH_TODOS_SUCCESS' )
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: action.todos
      }

    case FETCH_TODOS_FAIL:
    console.log( 'FETCH_TODOS_FAIL' )
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have items to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the items
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.error,
        items: []
      }

    default:
      console.log( 'todoReducer: default' )
      // ALWAYS have a default case in a reducer
      return state;
  }
}