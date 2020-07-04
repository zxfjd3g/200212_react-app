import React, {Component} from 'react'
import {connect} from 'react-redux'
import './index.css'

class Main extends Component {

  render() {
    const {firstView, loading, users, errorMsg} = this.props
    if (firstView) {
      return <h2>输入关键字进行搜索</h2>
    } else if (loading) {
      return <h2>正在加载中...</h2>
    } else if (errorMsg) {
      return <h2>{errorMsg}</h2>
    }
    return (
      <div className="row">
        {
          users.map(user => (
            <div className="card" key={user.id}>
              <a href={user.url} target="_blank" rel="noopener noreferrer">
                <img src={user.avatarUrl} style={{width: 100}} alt=""/>
              </a>
            <p className="card-text">{user.name}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default connect(
  /* 
  {
    userList: {firstView, loading, users, errorMsg}
  }
  state => ({...state.userList})  ==> 不能直接看出传递哪些属性
  */
  state => ({ // 明确指定要传递的4个属性 ==> 不用在UI组件Main中声明了
    firstView: state.userList.firstView,
    loading: state.userList.loading,
    users: state.userList.users,
    errorMsg: state.userList.errorMsg,
  }),
  null, // 不需要更新redux的状态
)(Main)
