import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from '@/App'

import store from './redux/store'

ReactDOM.render((
  /* Provider: 向内部的容器组件提供接收的store对象 */
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'))

