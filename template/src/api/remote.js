import axios from 'axios';

const baseURL = 'https://sandbox.howtojsonapi.com';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
});

export default api;
