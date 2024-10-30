import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/Userstore'
// 创建axios实例
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 50000
})
// axios请求拦截器
instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)
// axios响应拦截器
instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response.data.message === 'token校验失败') {
      ElMessage({ type: 'error', message: '请登陆后重试！' })
    } else {
      ElMessage({ type: 'error', message: err.response.data.message })
    }

    return Promise.reject(err)
  }
)

export default instance
