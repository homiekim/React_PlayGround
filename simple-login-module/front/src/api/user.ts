import { User } from './../userType';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3080';
axios.defaults.withCredentials = true;

export function signUpAPI(data : User) {
  return axios.post('/user/signup', data).then((response) => response.data);
}

export function logInAPI(data: { email: string; password: string }) {
  return axios.post('/user/login', data).then((response) => {
    const {access_token} = response.data;
    axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    return response.data;
  });
}

export function checkAPI() {
  return axios.get('/user/check').then((response) => response.data);
}

export function refreshAPI(data: {email : string}) {
  return axios.post('/user/refresh', data).then((response) => {
    const {access_token} = response.data;
    axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    return response.data;
  });
}