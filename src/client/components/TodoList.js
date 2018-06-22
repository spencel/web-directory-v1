import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { fetchTodoList } from '../actions/todoList' // react-redux process

class TodoList extends React.Component {
  constructor( props ) {
    super( props )
  }

  componentDidMount = () => {
    this.props.fetchTodoList() // react-redux process
  }

  render() {
    const { error, loading, todoList } = this.props
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

/*TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}*/

export default TodoList