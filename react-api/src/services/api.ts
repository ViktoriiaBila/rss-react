import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.search',
  timeout: 5000,
});
