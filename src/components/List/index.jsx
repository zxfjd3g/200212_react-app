import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.css'
import Item from '@/components/Item'

/* 
列表组件
*/
class List extends Component {

  render() {
    const {todos} = this.props

    return (
      <ul className="todo-main">
        {
          todos.map(todo => <Item key={todo.id} todo={todo} />)
        }
      </ul>
    )
  }
}
export default connect(
  state => ({todos: state.todos}),
  null
)(List)