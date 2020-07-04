import axios from 'axios'

/* 
包含多个用于创建action对象/函数的工厂函数action creator
*/
import {ADD_COMMENT, DELETE_COMMENT} from './action-types'

/* 
添加的同步action
*/
export const addComment = (comment) => ({type: ADD_COMMENT, comment})

/* 
删除的同步action
*/
export const deleteComment = (id) => ({type: DELETE_COMMENT, id})



