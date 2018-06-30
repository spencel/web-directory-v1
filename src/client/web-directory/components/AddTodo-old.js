import React from 'react'
import { connect } from 'react-redux'; // react-redux process
import { fetchAddTodo } from '../actions/addTodo' // react-redux process

class AddTodo extends React.Component {
  constructor( props ) {
    super( props );
  }

  componentDidMount() {
    console.log( 'AddTodo componentDidMount' )
  }

  onAddTodoKeyUp = ( event ) => {
		if ( event.key === 'Enter' ) {
			console.log( event.key );
			console.log( JSON.stringify( event.target.value ));
			var todoText = event.target.value;
			event.target.value = '';
			this.props.dispatch( fetchAddTodo( todoText ))
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

// Useful for react-redux
const mapStateToProps = state => {
  return {
  }
}

export default connect( mapStateToProps )( AddTodo ) // connect() necessary for react-redux