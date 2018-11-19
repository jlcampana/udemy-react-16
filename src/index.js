import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import axios from './axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(
  req => {
    console.log('request interceptor', req)
    return req
  },
  error => {
    console.error('ERE UN FISTRO', error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  res => {
    console.log(res)
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
