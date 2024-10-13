import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAxiosData } from '../../hooks/useAxiosData';

const StyledRecipeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;

  & > img {
    width: 200px;
    height: 200px;
    border-radius: 8px;
  }
  & > span {
    font-size: 20px;
  }

  @media (max-width: 461px) {
    & > img {
      width: 165px;
      height: 165px;
    }
    & > span {
      font-size: 16px;
    }
  }
`;

// TODO : 호버하면 뭔가 바뀌는게 있도록..
// 스켈레톤 컴포넌트 준비..
export default function RecipeItem({ id }) {
  const [itemData, setItemData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const { VITE_DB_URL } = import.meta.env;
    useAxiosData(`${VITE_DB_URL}/basic?RECIPE_ID=${id}`).then(res => {
      const resData = res.data[0];
      setItemData(resData);
    });
  }, [id]);
  return (
    <StyledRecipeItem onClick={() => navigate(`/detail/${itemData.RECIPE_ID}`)}>
      {itemData && (
        <>
          <img src={itemData.IMG_URL} alt={itemData.NAME} />
          <span>{itemData.NAME}</span>
        </>
      )}
    </StyledRecipeItem>
  );
}
