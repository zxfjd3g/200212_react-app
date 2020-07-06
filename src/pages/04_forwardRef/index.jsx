import React, { Component } from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/forwarding-refs.html
前置理解
	refs的作用:
	  1) 标识组件内的HTML标签 ==> 得到真实DOM对象 ==> 直接操作真实DOM (尽量少使用)
	  2) 标识组件内的子组件标签 ==> 得到组件对象 ==> 与子组件进行相互通信
	问题:
	  ref无法标识一个函数组件标签(因为没有组件实例对象)
	疑问: 
	  如果想操作函数组件内的HTML标签, 怎么办?

refs转发
	语法: React.forwardRef(FunctionComp)
	作用: 在函数组件外部通过ref得到函数组件内部的标签, 从而操作其内部标签
	应用: Link/NavLink就使用了此技术来封装, 来在组件外部获取操作内部包含的a标签
*/
export default class ForwardRef extends Component {

  // 创建一个ref容器对象 
  funRef = React.createRef()

  handleClick = () => {
    alert(this.funRef.current.innerHTML)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>读取函数组件内部的标签</button>

       {/*  <FunComponent ref={this.funRef}></FunComponent> */}
       <FrComponent ref={this.funRef}></FrComponent>
      </div>
    )
  }
}

const inputRef = React.createRef()

// 利用forwardRef()包装函数组件生成一个新组件
const FrComponent = React.forwardRef(
  function FunComponent (props, ref) {  // 高阶组件会将接收的ref容器传递给函数组件的第二个参数
    console.log('ref', ref)
    return (
      <div>
        <h3 ref={ref}>xxxxx</h3>
        <input type="text" ref={inputRef}/>
        <button onClick={() => inputRef.current.focus()}>插入</button>
      </div>
    )
  }
)