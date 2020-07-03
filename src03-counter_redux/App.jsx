import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {increment, decrement} from './redux/actions'
/* 
store对象的功能:
  getState(): 读取状态数据
  dispatch(action): 更新状态数据
  subscribe(listener): 绑定状态数据变化的 
*/
export default class App extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  componentDidMount () {
    // 绑定store内部状态数据变化的监听 ==> 更新当前组件
    // 返回的是解绑监听的函数
    this.unsubscribe = this.props.store.subscribe(() => {
      this.setState({}) // 只要setState()就会导致重新render
    })
  }

  // 死亡前解除订阅
  componentWillUnmount () {
    this.unsubscribe()
  }
  
  increment = () => {
    const number = this.refs.number.value*1
    // 不建议在dispatch()时直接创建action对象
    // 单独定义工厂函数模块创建action对象  ==> action creator
    this.props.store.dispatch(increment(number))    
  }

  decrement = () => {
    const number = this.refs.number.value*1
    this.props.store.dispatch(decrement(number))   
  }

  incrementIfOdd = () => {
    const number = this.refs.number.value*1
    if (this.props.store.getState()%2===1) {
      this.props.store.dispatch(increment(number))   
    }
  }

  incrementAsync = () => {
    const number = this.refs.number.value*1
    setTimeout(() => {
      this.props.store.dispatch(increment(number))   
    }, 1000);
  }

  render() {
    // 通过store.getState()得到状态数据
    const count = this.props.store.getState()
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
