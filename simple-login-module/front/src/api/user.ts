import { User } from './../userType';
import axios from 'axios';
import client from './client';

axios.defaults.baseURL = 'http://localhost:3080';
axios.defaults.withCredentials = true;

export function signUpAPI(data : User) {
  return axios.post('/user/signup', data).then((response) => response.data);
}

export function logInAPI(data: { email: string; password: string }) {
  return client.post('/user/login', data).then((response) => {
    const {access_token} = response.data;
    client.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    return response.data.userInfo;
  });
}

export function checkAPI() {
  return client.get('/user/check').then((response) => response.data);
}

export function refreshAPI() {
  return axios.post('/user/refresh').then((response) => {
    const {access_token} = response.data;
    axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    return response.data;
  });
}

export function getUserInfoAPI() {
  return axios.get('/user').then((response) => response.data);
}
