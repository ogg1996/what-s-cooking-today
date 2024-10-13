import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Category from '../components/common/Category';
import { useAxiosData } from '../hooks/useAxiosData';
import RecipeItems from '../components/common/RecipeItems';

const StyledRecipeList = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 20px;
`;

// TODO : 무한 스크롤 구현...
export default function RecipeList() {
  const [selected, setSelected] = useState('전체');
  const [recipeItems, setRecipeItems] = useState(null);

  const { VITE_DB_URL } = import.meta.env;
  const endurl =
    selected === '전체'
      ? `${VITE_DB_URL}/basic?_page=1&_limit=20`
      : `${VITE_DB_URL}/basic?TYPE=${selected}&_page=1&_limit=20`;
  useEffect(() => {
    useAxiosData(endurl).then(res => {
      const resData = res.data;
      setRecipeItems(resData);
    });
  }, [selected]);
  return (
    <StyledRecipeList>
      <Category selected={selected} setSelected={setSelected} />
      <RecipeItems recipeItems={recipeItems} />
    </StyledRecipeList>
  );
}
