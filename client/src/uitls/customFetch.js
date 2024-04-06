import axios from 'axios';
const customFetch = axios.create({
  // baseURL: '/api/v1',
  baseURL: '/',
});

export default customFetch;
