import React from 'react'
import { connect } from 'react-redux'; // react-redux process

class Todo extends React.Component {
  constructor( props ) {
    super( props );
    console.log( 'Todo.constructor()' )
    console.log( props )
  }

  componentDidMount() {
    console.log( 'Todo componentDidMount' )
  }

  render() {
    console.log( `Todo.render(): text: ${this.props.text}` )
    return (
      <li className='Todo'>
        {this.props.text}
      </li>
    )
  }
}

export default Todo