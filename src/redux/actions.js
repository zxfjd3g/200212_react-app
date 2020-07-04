import axios from 'axios'

/* 
包含多个用于创建action对象/函数的工厂函数action creator
*/
import {REQUESTING, REQ_ERROR, REQ_SUCCESS} from './action-types'
// 同步action的名称一般是type名称转小写
/* 
变为请求中的同步action
*/
const requesting = () => ({type: REQUESTING}) 
/* 
变为请求成功的同步action
*/
const reqSuccess = (users) => ({type: REQ_SUCCESS, data: users}) 
/* 
变为请求失败的同步action
*/
const reqError = (errorMsg) => ({type: REQ_ERROR, data: errorMsg}) 

/* 
搜索的异步action
*/
export const search = (searchName) => {
  return dispatch => {
    // 分发同步action => 更新状态(请求中)
    dispatch(requesting())

    // 发ajax请求获取用户列表数据
    axios.get('/api/search/users3', {params: {q: searchName}})
      .then(response => { // 成功了, 更新状态(成功)
        const result = response.data
        const users = result.items.map(item => ({
          id: item.id,
          name: item.login,
          url: item.html_url,
          avatarUrl: item.avatar_url
        }))

        // 分发同步action => 更新状态(请求成功)
        dispatch(reqSuccess(users))
      })
      .catch(error => { // 失败了, 更新状态(失败)
        // 分发同步action => 更新状态(请求失败)
        dispatch(reqError(error.message))
      })
  }
}