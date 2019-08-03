import baseAxios from 'axios'
import Config from 'react-native-config'

export const apiClient = baseAxios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json',
  baseURL: Config.API_BASE_URL
})
apiClient.interceptors.request.use(
  req => {
    if (__DEV__) {
      console.group(`${req.method} ${req.url}`)
      console.log(req)
      console.groupEnd()
    }
    return req
  },
  error => {
    if (__DEV__) {
      console.log('request error')
      console.log(Object.entries(error))
    }
    return Promise.reject(error)
  }
)
apiClient.interceptors.response.use(
  res => {
    if (__DEV__) {
      console.group(`${res.status} ${res.config.url}`)
      console.log(res)
      console.groupEnd()
    }

    return res
  },
  error => {
    if (__DEV__) {
      console.group(`${error.response.status} ${error.response.config.url}`)
      console.log(error.response)
      console.log(error.response.data.message)
      console.groupEnd()
    }
    switch (error.response.status) {
      case 500:
        break
      default:
        break
    }
    return Promise.reject(error)
  }
)
