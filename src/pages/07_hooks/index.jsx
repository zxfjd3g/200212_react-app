import React, { Component, useState, useEffect} from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/hooks-intro.html
工厂函数组件与ES6类组件的区别
  1. 函数组件没有this, 类组件有this (组件实例对象)
  2. 函数组件没有state/props/refs属性, 类组件对象有
    state ==> 使用hooks语法   useState()
    props ==> 函数的参数就是props
    refs ==> 通过React.forwardRef()来得到并操作函数组件内的标签对象
  3. 函数组件没有组件生命周期回调(勾子)
    componentDidMount(): 在挂载显示后执行 ==> 执行一次性异步任务
    componentDidUpdate(): 在更新显示后执行  ==> 用得少
    componentWillUnmount(): 在组件卸载前执行 ==> 做一些收尾的工作
    == 使用hooks语法 useEffect()

Hooks
  理解: react提供的一些新语法(函数)
  作用: 让函数组件也可以有自己状态以及生命周期的处理(当然不止这些)
常用语法:
  useState()
  useEffect()
  useRef()
  useContext()
*/

export default class Hooks extends Component {
  render() {
    return (
      <>
        <Hooks1 />
      </>
    )
  }
}

function Hooks1(props) {
  console.log('Hooks1')
  /* 
  useState(initValue): 在内部生成一个状态数据, 初始值是initValue,  返回一个数组
              第一个元素是状态数据值
              第二个元素是用于更新此状态数据的函数
              注意: 第一次调用会将initValue作为内部状态数据的初始值
                    后面再调用就肝得到内部保存的状态数据值
  */
  const [count, setCount] = useState(2)
  const [name, updateName] = useState('tom')

  /* 
  纯函数:
    同样的输入(参数)的多次调用得到的结果要相同
    在函数内不要直接修改参数对象内部的数据
    不要调用不纯的函数
  例子:
    纯函数: redux的reducer函数(只要你传入的state和action不变, 多次调用返回的新state就要一样)
    不纯函数: Math.random()
        var c = 2
        function sum (a, b) {return a + b + c}
  */

  /* 
  Effect Hook 可以让你在函数组件中执行副作用操作
    异步操作: 启动定时器/发ajax请求/绑定监听/订阅消息
    直接操作DOM
    操作浏览器的数据
  useEffect(callback)的回调函数什么时候执行
    相当componentDidMount()与componentDidUpdate()  ==> 初始显示后和更新显示后执行
  useEffect(callback, [])
    相当componentDidMount()  ==> 初始显示后执行一次
  */
  // document.title = count
  useEffect(() => {
    console.log('useEffect callback()')
    document.title = count
  })

  
  useEffect(() => {
    console.log('useEffect22 callback()')
    // 初始显示过2s后count值增加2
    const timeoutId = setTimeout(() => {
      setCount(count + 2)
    }, 2000)

    // 返回的函数就相当于componentWillUnmount()
    return () => { // 做收尾工作
      console.log('---componentWillUnmount()')
      clearTimeout(timeoutId)
    }
  }, [])// [] 用指定需要观察的可变数据, 一旦数据变化回调函数就会重新执行, 就只想执行一次就传入[]


  return (
    <>
      <h2>Hooks11标题</h2>
      <p onClick={() => updateName(name + '--')}>name: {name}</p>
      <p>点击次数{count}</p>
      <button onClick={() => setCount(count + 1)}>点击</button> &nbsp;
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
