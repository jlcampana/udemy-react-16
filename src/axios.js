//Global interceptor won't work because this is another instance
import axios from 'axios'

const instance = axios.create({
  baseURL = 'https://jsonplaceholder.typicode.com'
})

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN INSTANCE'


export default instance
