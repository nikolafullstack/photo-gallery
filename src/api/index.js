import axios from 'axios';

const BASE_URL = 'https://6061d3e4ac47190017a71d52.mockapi.io/flow';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export const getFlow = params => api.get('', {
  params,
});
