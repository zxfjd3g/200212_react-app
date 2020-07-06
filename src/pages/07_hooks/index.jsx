import React, { Component} from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/hooks-intro.html
*/

export default class Hooks extends Component {
  render() {
    return (
      <>
        <Hooks1 />
        <Hooks2 />
      </>
    )
  }
}

function Hooks1(props) {
  return (
    <>
      <h2>Hooks11标题</h2>
      <p>点击次数???</p>
      <button>点击</button> &nbsp;
      <button>卸载组件</button>
    </>
  )
}

function Hooks2(props) {

  return (
    <>
      <h2>Hooks22标题</h2>
      <input type="text"/> &nbsp;
      <button>点击插入</button>&nbsp;
      <button>点击生成一个新ID</button> 
    </>
  )
}
