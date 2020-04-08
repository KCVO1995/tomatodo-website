import axios from 'axios';
import {createHashHistory} from 'history';

const appId = 'syzDKSikpvth7UQxVZjHadf2';
const appSecret = 'fozkv4EKRftwyuSCTiiFdnLc';

const instance = axios.create({
  baseURL: 'https://gp-server.hunger-valley.com/',
  headers: {
    't-app-id': appId,
    't-app-secret': appSecret
  }
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
  const xToken = localStorage.getItem('x-token');
  if (xToken) {config.headers.Authorization = `Bearer ${xToken}`;}
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  console.error(error);
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做点什么
  if (response.headers['x-token']) {
    localStorage.setItem('x-token', response.headers['x-token']);
  }
  return response;
}, error => {
  // 对响应错误做点什么
  if (error.response.status === 401) {
    createHashHistory().push('/login');
  }
  return Promise.reject(error);
});

export default instance;