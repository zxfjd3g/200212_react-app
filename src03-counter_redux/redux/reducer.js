/* 
包含n个用于根据当前的state和指定的action计算产生新的state的函数
*/
import {INCREMENT, DECREMENT} from './action-types'

/* 
管理count数据的reducer函数
一般将reducer函数的名称指定为要管理数据的名称
state: 当前原本的状态值, 第一次调用没有
action: 对象, 结构: {type: '标识名称', data: 数据值}
  增加的type: INCREMENT
  减少的type: DECREMENT
  data值保存的是要增加或减少的数量number
*/
const initCount = 3
export default function count(state=initCount, action) {
  console.log('count()', state, action)
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  }
}