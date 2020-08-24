import axios from 'axios';
const url = 'https://run.mocky.io/v3';
const api = axios.create({
  baseURL: 'https://rodrigokaos.free.beeceptor.com'
});
  
export default api;