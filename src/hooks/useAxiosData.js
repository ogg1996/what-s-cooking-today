import axios from 'axios';

export const useAxiosData = url => {
  return axios.get(url);
};
