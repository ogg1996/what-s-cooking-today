import axiosApiInstance from '@api/axiosApiInstance';

const detailAPi = async id => {
  const response = await axiosApiInstance.get('/detail', {
    params: { id }
  });

  return response.data;
};

export default detailAPi;
