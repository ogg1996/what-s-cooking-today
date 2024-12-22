import axiosApiInstance from '@api/axiosApiInstance';

const suggestApi = async foodType => {
  const response = await axiosApiInstance.get('/suggest', {
    params: { foodType }
  });

  return response.data;
};

export default suggestApi;
