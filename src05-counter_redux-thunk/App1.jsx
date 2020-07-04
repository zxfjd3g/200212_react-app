import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment, decrement} from './redux/actions'
/* 
store对象的功能:
  getState(): 读取状态数据
  dispatch(action): 更新状态数据
  subscribe(listener): 绑定状态数据变化的 
*/


/* 
当前App就是一个UI组件
  关注界面显示, 不用直接与redux交互
  不会使用任何redux相关的语法
*/
class App extends Component {

  static propTypes = {
    count: PropTypes.number,  // 声明接收一般属性
    increment: PropTypes.func, // 声明接收函数属性
    decrement: PropTypes.func,
  }

  increment = () => {
    const number = this.refs.number.value*1
    // 不建议在dispatch()时直接创建action对象
    // 单独定义工厂函数模块创建action对象  ==> action creator
    this.props.increment(number) 
  }

  decrement = () => {
    const number = this.refs.number.value*1
    this.props.decrement(number) 
  }

  incrementIfOdd = () => {
    const number = this.refs.number.value*1
    if (this.props.count%2===1) {
     this.props.increment(number) 
    }
  }

  incrementAsync = () => {
    const number = this.refs.number.value*1
    setTimeout(() => {
      this.props.increment(number)
    }, 1000);
  }

  render() {
    // 通过store.getState()得到状态数据
    const count = this.props.count
    return (
      <div>
        <div>click {count} times</div>
        <br/>
        <select ref="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;

        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}

/* 
将store的state数据映射成一般属性传递给UI组件
用于指定一般属性的回调函数
*/
const mapStatetoProps = state => ({ // 对象中所有属性都自动传递给UI组件App
  count: state
})

/* 
将包含dispatch()的函数映射成属性传递给UI组件
用于指定函数属性的回调函数
*/
const mapDispatchToProps = (dispatch) => ({ // 对象中的所有方法(函数)都自动传递给UI组件App
  increment: number => dispatch(increment(number)),
  decrement: number => dispatch(decrement(number)),
})

// 产生容器组件 ==> ConnectFunction
const ContainerComp = connect( // 参数指定要向UI组件App传递哪些属性
  mapStatetoProps, // 用来指定一般属性
  mapDispatchToProps // 用来指定函数属性
)(App) // 第二个括号的参数指定UI组件

// 返回容器组件
export default ContainerComp