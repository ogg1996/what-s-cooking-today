import axiosApiInstance from '@api/axiosApiInstance';

const searchApi = async (query, page = 1, limit = 10) => {
  const response = await axiosApiInstance.get('/search', {
    params: { query, page, limit }
  });

  return response.data;
};

export default searchApi;
