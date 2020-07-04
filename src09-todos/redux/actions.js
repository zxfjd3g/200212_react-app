import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  DELETE_COMPLETED_TODOS,
  CHECK_ALL_TODOS
} from './action-types'

// 添加todo的同步action
export const addTodo = (title) => ({type: ADD_TODO, title})

// 删除todo的同步action
export const deleteTodo = (id) => ({type:DELETE_TODO, id})

// 更新todo的同步action
export const updateTodo = (id, checked) => ({type:UPDATE_TODO, data: {id, checked}})

// 删除已完成todo的同步action
export const deleteCompletedTodos = () => ({type:DELETE_COMPLETED_TODOS})

// 全选或全不选todo的同步action
export const checkAllTodos = (checked) => ({type:CHECK_ALL_TODOS, checked})