import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '@/redux/actions'
import './index.css'

/* 
头部组件
*/
class Header extends Component {

  state = {
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value.trim()
    })
  }

  handleKeyUp = (e) => {
    // 如果不是enter键, 直接结束
    if (e.keyCode!==13) return
    // 读取title状态数据
    const {title} = this.state
    // 如果是空串, 直接结束
    if (!title) return

    // 调用函数更新父组件的状态
    this.props.addTodo(title)

    // 清除输入
    this.setState({
      title: ''
    })
  }

  render() {
    const {title} = this.state
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" value={title}
          onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(Header)