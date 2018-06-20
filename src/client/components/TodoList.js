import React from 'react'
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todos'

class TodoList extends React.Component {
  componentDidMount() {
    console.log( 'TodoList componentDidMount' )
    this.props.dispatch( fetchTodos())
  }

  render() {
    const { error, loading, todos } = this.props
    if ( error ) {
      return <div>{error.message}</div>
    }
    if ( loading ) {
      return <div>Loading...</div>
    }
    return (
      <ul>
        {todos.map(( todo, i ) => {
          return <li key={i}>{todo.text}</li>
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.items,
    loading: state.todos.loading,
    error: state.todos.error
  }
}

export default connect( mapStateToProps )( TodoList )