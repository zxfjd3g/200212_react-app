import React, { Component } from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/forwarding-refs.html
*/
export default class ForwardRef extends Component {

  render() {
    return (
      <div>
        <button>读取函数组件内部的标签</button>
      </div>
    )
  }
}
