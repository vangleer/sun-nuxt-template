export default function({$axios,store}) {
  $axios.defaults.timeout = 50000
  // $axios.defaults.baseURL = 'http://localhost:4000'

  $axios.onRequest = function(config) {
    console.log('请求拦截')
    return config
  }
  $axios.onResponse= function(data) {
    console.log('响应拦截')
    return data
  }
}