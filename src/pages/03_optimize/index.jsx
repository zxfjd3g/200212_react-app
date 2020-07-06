import React, { Component } from 'react'

/* 
组件优化
*/
export default class Optimize extends Component {
  
  render() {
    return (
      <div>
        <h2>父组件: m1.count: ???</h2>
        <button>假更新</button>
        <br/>
        <br/>
        <Child></Child>
      </div>
    )
  }
}

class Child extends Component {

  render() {
    return (
      <div>
        <h3>子组件: m2.count2: ???</h3>
        <h3>m1.count: ???</h3>
        
        <button>假更新</button> &nbsp;
        <button>正确更新</button> &nbsp;
        <button>错误更新</button> &nbsp;
      </div>
    )
  }
}