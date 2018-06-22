import { connect } from 'react-redux'
import { fetchAddTodo } from '../actions/addTodo'
import AddTodo from '../components/AddTodo'

const mapStateToProps = state => {
	return {
		text: state.addTodoReducer.text
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchAddTodo: ( text ) => dispatch( fetchAddTodo( text ))
	}
}

const AddTodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)( AddTodo )

export default AddTodoContainer