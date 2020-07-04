/* 
生成初始和新状态数据的回调函数
*/
import {combineReducers} from 'redux'

import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  DELETE_COMPLETED_TODOS,
  CHECK_ALL_TODOS
} from './action-types'

const initTodos = [ 
  {id: 1, title: '吃饭', completed: false},
  {id: 2, title: '睡觉', completed: true},
  {id: 3, title: '打代码', completed: false},
]
todos.id = 4
/* 
管理todos数据的reducer
*/
function todos(state=initTodos, action) {
  switch (action.type) {
    case ADD_TODO: // 添加TODO
      const todo = {
        id: todos.id++,
        title: action.title,
        completed: false
      }
      return [todo, ...state]

    case DELETE_TODO: // 删除TODO
      return state.filter(item => item.id!==action.id)

    case UPDATE_TODO: // 更新TODO的选中状态
      const {id, checked} = action.data
      return state.map(todo => {
        // id对应的todo, 要产生一个新的todo, 其它todo不用变
        if (id===todo.id) {
          return {...todo, completed: checked}
        } 
        return todo
      })

    case DELETE_COMPLETED_TODOS: // 删除已完成的todo
      return state.filter(todo => !todo.completed)

    case CHECK_ALL_TODOS: // 全选/全不选
      return state.map(todo => {
        // 每个todo都要产生一个新的
        return {...todo, completed: action.checked}
      })

    default:
      return state
  }
}

export default combineReducers({
  todos,
  // 还有其它的子reduer
})