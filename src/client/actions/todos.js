import fetch from 'cross-fetch'

export const FETCH_TODOS_BEGIN = 'FETCH_TODOS_BEGIN'
export const fetchTodosBegin = () => ({ type: FETCH_TODOS_BEGIN })
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  todos: todos
})
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL'
export const fetchTodosFail = error => ({ 
  type: FETCH_TODOS_FAIL,
  error: error
})

export function fetchTodos() {
  return dispatch => {
    dispatch( fetchTodosBegin())
    return fetch( '/api/fetchTodos' )
      .then( handleErrors )
      .then( response => {
        console.log( response )
        return response.json()
      })
      .then( json => {
        console.log( json )
        dispatch( fetchTodosSuccess( json ))
        return json
      })
      .catch( error => dispatch( fetchTodosFail( error )))
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors( response ) {
  if ( !response.ok ) {
    throw Error( response.statusText )
  }
  return response
}
