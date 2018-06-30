import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ text }) => (
  <li className='Todo'>
    {text}
  </li>
)

/*Todo.propTypes = {
  text: PropTypes.string.isRequired
}*/

export default Todo