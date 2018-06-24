import React from 'react'
//import { connect } from 'react-redux'; // react-redux process
//import { fetchAddTodo } from '../actions/addTodo' // react-redux process

class Mom extends React.Component {
  constructor( props ) {
    super( props );
  }

  componentDidMount() {
  }

  render() {
    var style = {
      'color': 'yellow',
      'backgroundColor': 'black'
    }
    return (
      <div className='Mom'>Hi Mom! 
        <span style={style}> blonde hair</span>
      </div>
    )
  }
}

export default Mom