import axios from 'axios'

const request = axios.create({
    baseURL:'http://realworld.api.fed.lagounews.com'
})


// //request拦截器
request.interceptors.request.use(function (config) {
    console.log('123')
    // 在发送请求之前做些什么
    config.headers.Authorization = `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTcxYTE4M2QxOWFmYjNhYmI3OTU1OSIsInVzZXJuYW1lIjoibGlodWF3ZWkxIiwiZXhwIjoxNjM4MzM4OTY3LCJpYXQiOjE2MzMxNTQ5Njd9.mGa-dFfrlertNnjZQeebHJiExzK1e-NvzC5BYmDiMmQ`
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
export default request