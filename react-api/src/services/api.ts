import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.flickr.com/services/rest/',
  timeout: 5000,
});
