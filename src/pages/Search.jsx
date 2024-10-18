import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useAxiosData } from '../hooks/useAxiosData';
import RecipeItems from '../components/common/RecipeItems';
import { setPageState } from '../redux';

const StyledSearch = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export default function Search() {
  const dispatch = useDispatch();

  const [recipeItems, setRecipeItems] = useState(null);

  const [searchParams] = useSearchParams();
  const { VITE_DB_URL } = import.meta.env;

  useEffect(() => {
    dispatch(setPageState('search'));
  }, []);

  useEffect(() => {
    const query = searchParams.get('query');
    useAxiosData(`${VITE_DB_URL}/basic?NAME_like=${query}`).then(res => {
      const resData = res.data;
      setRecipeItems(resData);
    });
  }, [searchParams]);

  return (
    <StyledSearch>
      {recipeItems && (
        <>
          <p>검색 결과는 총 {recipeItems.length}건 입니다.</p>
          <RecipeItems recipeItems={recipeItems} />
        </>
      )}
    </StyledSearch>
  );
}
