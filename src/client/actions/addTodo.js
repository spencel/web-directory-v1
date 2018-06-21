import fetch from 'cross-fetch' // browser compatibility for built-in fetch function

export const FETCH_ADDTODO_BEGIN = 'FETCH_ADDTODO_BEGIN'
export const fetchAddTodoBegin = () => ({
  type: FETCH_ADDTODO_BEGIN
})
export const FETCH_ADDTODO_SUCCESS = 'FETCH_ADDTODO_SUCCESS'
export const fetchAddTodoSuccess = todoList => ({
  type: FETCH_ADDTODO_SUCCESS,
  todoList: todoList
})
export const FETCH_ADDTODO_FAIL = 'FETCH_ADDTODO_FAIL'
export const fetchAddTodoFail = error => ({ 
  type: FETCH_ADDTODO_FAIL,
  error: error
})

export function fetchAddTodo( text ) {
  return dispatch => {
    dispatch( fetchAddTodoBegin())
    return fetch(
			'/api/fetchAddTodo',
			{ 
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: 'test todo' }
		)
      .then( handleErrors )
      .then( response => {
        console.log( response )
        return response.json()
      })
      .then( json => {
        console.log( json )
        dispatch( fetchAddTodoSuccess( json ))
        return json
      })
      .catch( error => dispatch( fetchAddTodoFail( error )))
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors( response ) {
  if ( !response.ok ) {
    throw Error( response.statusText )
  }
  return response
}
