import fetch from 'cross-fetch' // browser compatibility for built-in fetch function

export const FETCH_TODOLIST_BEGIN = 'FETCH_TODOLIST_BEGIN'
export const fetchTodoListBegin = () => ({
  type: FETCH_TODOLIST_BEGIN
})
export const FETCH_TODOLIST_SUCCESS = 'FETCH_TODOLIST_SUCCESS'
export const fetchTodoListSuccess = todoList => ({
  type: FETCH_TODOLIST_SUCCESS,
  todoList: todoList
})
export const FETCH_TODOLIST_FAIL = 'FETCH_TODOLIST_FAIL'
export const fetchTodoListFail = error => ({ 
  type: FETCH_TODOLIST_FAIL,
  error: error
})

export function fetchTodoList() {
  return dispatch => {
    dispatch( fetchTodoListBegin())
    return fetch( '/api/fetchTodoList' )
      .then( handleErrors )
      .then( response => {
        console.log( response )
        return response.json()
      })
      .then( json => {
        console.log( json )
        dispatch( fetchTodoListSuccess( json ))
        return json
      })
      .catch( error => dispatch( fetchTodoListFail( error )))
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors( response ) {
  if ( !response.ok ) {
    throw Error( response.statusText )
  }
  return response
}
