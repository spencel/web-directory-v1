import { connect } from 'react-redux'
import { fetchTodoList } from '../actions/todoList'
import TodoList from '../components/TodoList'

const mapStateToProps = state => {
	console.log( 'mapStateToProps:' )
	console.log( state )
	return {
		loading: state.todoListReducer.loading,
		todoList: state.todoListReducer.todoList,
		error: state.todoListReducer.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchTodoList: () => dispatch( fetchTodoList())
	}
}

const TodoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( TodoList )

export default TodoListContainer