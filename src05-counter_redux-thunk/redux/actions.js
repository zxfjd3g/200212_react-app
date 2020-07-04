/* 
用于创建action对象的工厂函数  ==> action creator
同步action: 对象类型 {type: 'xxx', data: value}
异步action: 函数类型 dispatch => {执行异步代码, 完成后, dispatch(同步action对象)}
*/

import {INCREMENT, DECREMENT} from './action-types'

/* 
增加的同步action
*/
export const increment = (number) => ({type: INCREMENT, data: number})

/* 
减少的同步action
*/
export const decrement = (number) => ({type: DECREMENT, data: number})

/* 
增加的异步action
*/
export const incrementAsync = (number) => {
 return dispatch => {
  // 执行异步操作
  setTimeout(() => {
    // 完成后, 分发同步action
    dispatch(increment(number))  // 只有分发同步action才会触发reducer调用, 产生新state
  }, 1000)
 }
}

