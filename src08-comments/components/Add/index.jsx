import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addComment} from '../../redux/actions'

@connect(
  null,
  {addComment}
)
class Add extends Component {

  state = {
    username: '',
    content: ''
  }

  handleChange = (name) => {
    return (e) => {
      this.setState({
        [name]: e.target.value.trim()
      })
    }
  }

  submit = (e) => {
    // 阻止事件的默认行为
    e.preventDefault()

    // 得到收集的数据
    const {username, content} = this.state

    // 创建comment对象
    const comment = {
      id: Date.now(),
      username,
      content
    }

    // 向store的state的comments中添加一个comment对象
    this.props.addComment(comment)

    // 清除输入
    this.setState({
      username: '',
      content: ''
    })
  }

  render() {
    const {username, content} = this.state
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" 
              value={username} onChange={this.handleChange('username')}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容"
              value={content} onChange={this.handleChange('content')}></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-default pull-right" onClick={this.submit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Add