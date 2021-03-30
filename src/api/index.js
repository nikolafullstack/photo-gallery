import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export const getFlow = params => api.get('', {
  params,
});
