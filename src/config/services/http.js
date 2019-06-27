import axios from 'axios';

const { VUE_APP_URL_API } = process.env;

const http = axios.create({
  baseURL: VUE_APP_URL_API,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
});

export default http;
