import React, {Component} from 'react'
// 分别引入需要使用的组件
import {Button, message} from 'antd'
// import button from 'antd/es/button'
// import message from 'antd/es/message'

export default class App extends Component {
  
  handleClick = () => {
    message.success('提示...')
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>提交</Button>
        <Button type="primary" onClick={this.handleClick}>提交</Button>
        <Button type="danger" onClick={this.handleClick}>提交</Button>
      </div>
    )
  }
}