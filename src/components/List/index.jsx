import React, { Component } from 'react'
import {connect} from 'react-redux'
import './index.css'
import {deleteComment} from '@/'

@connect(
  state => ({comments: state.comments}),
  {deleteComment}
)
class List extends Component {

  deleteComment = (e, comment) => {
    e.preventDefault()
    if (window.confirm(`确定删除 ${comment.username} 的评论吗?`)) {
      this.props.deleteComment(comment.id)
    }
  }

  render() {
    const {comments} = this.props
    const display = comments.length>0 ? 'none' : 'block'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map(item => (
              <li className="list-group-item" key={item.id}>
                <div className="handle">
                  <a href="#" onClick={(e) => this.deleteComment(e, item)}>删除</a>
                </div>
                <p className="user"><span >{item.username}</span><span>说:</span></p>
                <p className="centence">{item.content}</p>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default List