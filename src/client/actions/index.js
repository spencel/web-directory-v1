import fetch from 'cross-fetch'

export const addTodo = text => ({
  type: 'ADD_TODO',
  text
})

export function fetchTodos( todos ) {
  return function ( dispatch ) {
    dispatch( requestTodos( todos ))
    return fetch( 'api/getTodos' )
      .then(
        response => {
          response.json()
        },
        error => {
          console.log( error )
        }
      )
      .then( json => {
        dispatch( receiveTodos( todos, json ))
      })
  }
}