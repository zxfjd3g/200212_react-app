import React, { Component } from 'react'
import {connect} from 'react-redux'
import {search} from '@/redux/actions'

class Search extends Component {
  state = {
    searchName: ''
  }

  chanageSearchName = (searchName) => {
    this.setState({
      searchName
    })
  }

  handleChange = (e) => {
    this.setState({
      searchName: e.target.value.trim()
    })
  }

  search = () => {
    const {searchName} = this.state
    if (searchName) {
      // 分发action==> 通知redux/store去调用reducer产生新state数据
      this.props.search(searchName)      
      // 清除输入
      this.setState({
        searchName: ''
      })
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" 
            value={this.state.searchName} onChange={this.handleChange}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

export default connect(
  null,
  {search}  // search: (searchName) => dispath(search(searchName))
)(Search)