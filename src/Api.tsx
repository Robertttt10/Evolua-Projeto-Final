import axios from "axios";

const api = axios.create({
  timeout:1500,
  url: '/users',
  baseURL:'http://localhost:3001',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }  
});

export default api;