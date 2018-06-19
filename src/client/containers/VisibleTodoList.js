import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const getVisibleTodos = ( todos ) => {
  return todos
}

const mapStateToProps = state => ({
  todos: getVisibleTodos( state.todos, state.visibilityFilter )
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch( toggleTodo( id ))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( TodoList )