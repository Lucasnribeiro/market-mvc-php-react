import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PROD ? import.meta.env.VITE_API_PRODUCTION : import.meta.env.VITE_API_LOCAL,
});

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jwtToken');
    const auth = token ? `Bearer ${token}` : '';
    config.headers.Authorization = auth;
    return config;
  },
  error => Promise.reject(error),
);


api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (401 === error.response.status) {

    // window.location.replace("/login"); 
    
  }
});
export default api;