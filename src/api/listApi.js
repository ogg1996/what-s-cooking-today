import axiosApiInstance from '@api/axiosApiInstance';

const listApi = async (foodType, page = 1, limit = 10) => {
  const response = await axiosApiInstance.get('/list', {
    params: { foodType, page, limit }
  });

  return response.data;
};

export default listApi;
