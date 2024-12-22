import axios from 'axios';

const axiosApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json' // 공통 헤더
  }
});

export default axiosApiInstance;
