import React from 'react'
//import { connect } from 'react-redux'; // react-redux process
//import { fetchAddTodo } from '../actions/addTodo' // react-redux process

class AddTodo extends React.Component {
  constructor( props ) {
    super( props );
  }

  componentDidMount() {
  }

  onAddTodoKeyUp = ( event ) => {
		if ( event.key === 'Enter' ) {
			var todoText = event.target.value;
			event.target.value = '';
			this.props.fetchAddTodo( todoText )
		}
	}

  render() {
    return (
      <input
        className='AddTodo'
        type='text'
        placeholder='new'
        onKeyUp={this.onAddTodoKeyUp}
      />
    )
  }
}

export default AddTodo