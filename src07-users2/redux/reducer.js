/* 
根据老state和指定的action来产生新state的函数
*/
import {REQUESTING, REQ_ERROR, REQ_SUCCESS} from './action-types'

import {combineReducers} from 'redux'

/* 
管理的是用户列表相关数据的reducer函数
*/
const initUserList = {
  firstView: true, // 是否显示初始界面
  loading: false, // 是否正在请求中
  users: [], // 所有匹配的用户列表
  errorMsg: '', // 需要显示请求错误信息
}
function userList(state = initUserList, action) {
  switch (action.type) {
    case REQUESTING:  // 请求中
      return {
        ...state,
        firstView: false,
        loading: true
      }
    case REQ_ERROR: // 请求失败
      return {
        ...state,
        loading: false,
        errorMsg: action.data
      }

    case REQ_SUCCESS: // 请求成功
      return {
        ...state,
        loading: false,
        users: action.data
      }
    default:
      return state
  }
}

// 暴露合并后的总reducer
export default combineReducers({
  userList,
  // 后面再配置其它reducer
})
/* 
总state的结构:
  {
    userList: {firstView, loading, users, errorMsg}
  }
*/