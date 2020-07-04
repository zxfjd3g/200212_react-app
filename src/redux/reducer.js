/* 
根据老state和指定的action来产生新state的函数
*/
import {ADD_COMMENT, DELETE_COMMENT} from './action-types'

import {combineReducers} from 'redux'

/* 
管理的是评论列表相关数据的reducer函数
*/
const initComments = [
  {id: 1, username: 'tom', content: 'xxx'},
  {id: 2, username: 'Jack', content: 'yyy'}
]
function comments(state = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:  // 添加
     return [action.comment, ...state]
    case DELETE_COMMENT: // 删除
      return state.filter(item => item.id!==action.id)
    default:
      return state
  }
}

// 暴露合并后的总reducer
export default combineReducers({
  comments,
  // 后面再配置其它reducer
})
/* 
总state的结构:
  {
    comments: [{id, username, content}]
  }
*/