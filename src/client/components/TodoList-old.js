import React from 'react'
import { connect } from 'react-redux'; // react-redux process
import { fetchTodoList } from '../actions/todoList' // react-redux process
//import Todo from './Todo'
import Todo from './presenters/Todo'

class TodoList extends React.Component {
  componentDidMount() {
    console.log( 'TodoList componentDidMount' )
    this.props.dispatch( fetchTodoList()) // react-redux process
  }

  render() {
    const { error, loading, todoList } = this.props
    console.log( `TodoList.render(): todoList:` )
    console.log( todoList )
    if ( error ) {
      return <div>{error.message}</div>
    }
    if ( loading ) {
      return <div>Loading...</div>
    }
    return (
      <ul className='TodoList'>
        {todoList.map(( todo, i ) => {
          return <Todo key={i} text={todo.text} />
        })}
      </ul>
    )
  }
}

// Useful for react-redux
const mapStateToProps = state => {
  return {
    todoList: state.todoList.items,
    loading: state.todoList.loading,
    error: state.todoList.error
  }
}

export default connect( mapStateToProps )( TodoList ) // connect() necessary for react-redux