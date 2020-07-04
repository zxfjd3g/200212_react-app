/* 
redux最核心的管理对象
*/
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'

// 创建store对象
const store = createStore(
  reducer, 
  /* 
  编码区别开发环境与生产环境: process.env.NODE_ENV
    'production': 当前是生产环境打包运行的(yarn build)
    'development': 当前是开发环境运行的(yarn start)
  */
  process.env.NODE_ENV==='production' ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk))  // 应用上redux的异步中间件
) 
// console.log('store', store, store.getState())
/* 
store内部管理着2个东西
  reducer函数(接收的)
  state数据: store对象产生时, 就会调用一次reducer函数得到初始的state数据
*/

// 暴露store
export default store