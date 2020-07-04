/* 
redux最核心的管理对象
*/
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

// 创建store对象
const store = createStore(
  reducer, 
  applyMiddleware(thunk)  // 应用上redux的异步中间件
) 
// console.log('store', store, store.getState())
/* 
store内部管理着2个东西
  reducer函数(接收的)
  state数据: store对象产生时, 就会调用一次reducer函数得到初始的state数据
*/

// 暴露store
export default store