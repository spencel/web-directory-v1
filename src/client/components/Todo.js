import React from 'react'

class Todo extends React.Component {
  constructor( props ) {
    super( props );
    console.log( 'Todo.constructor()' )
    console.log( props )
  }

  componentDidMount() {
    console.log( 'Todo componentDidMount' )
  }

  deleteTodo = () => {
    
  }

  render() {
    console.log( `Todo.render(): text: ${this.props.text}` )
    return (
      <li className='Todo'>
        {this.props.text}
        <span onClick={this.deleteTodo}>x</span>
      </li>
    )
  }
}

export default Todo