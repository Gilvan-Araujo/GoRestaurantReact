import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Gilvan-Araujo/GoRestaurantReact',
});

export default api;
