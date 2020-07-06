import React, { Component } from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/render-props.html
*/
export default class RenderProps extends Component {
  render() {
    return (
      <div>
        <A></A>
      </div>
    )
  }
}

class A extends Component {

  render() {
    return (
      <div>
        <h2>A组件标题</h2>
      </div>
    )
  }
}