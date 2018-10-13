import axios from 'axios'
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 25000
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // console.log('requestError: ', error)
    if (error.response && error.response.status === 500) {
      console.error('网络错误')
    }
    return Promise.reject(error)
  }
)

export default service
