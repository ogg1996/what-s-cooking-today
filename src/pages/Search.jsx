import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import RecipeItems from '@components-common/RecipeItems';
import SkeletonRecipeItems from '@skeletons-common/SkeletonRecipeItems';
import { setPageState } from '@/redux';
import { useAxiosData } from '@/hooks/useAxiosData';
import { useScrollTop } from '@/hooks/useScrollToY';

const StyledSearch = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export default function Search() {
  const dispatch = useDispatch();

  const [recipeItems, setRecipeItems] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { VITE_DB_URL } = import.meta.env;

  useEffect(() => {
    useScrollTop();
    dispatch(setPageState('search'));
  }, []);

  useEffect(() => {
    setRecipeItems(null);
    useAxiosData(`${VITE_DB_URL}/basic?NAME_like=${query}`).then(res => {
      const resData = res.data;
      setRecipeItems(resData);
    });
  }, [searchParams]);

  return (
    <StyledSearch>
      {recipeItems ? (
        <>
          <p>
            &apos;{query}&apos;&#40;으&#41;로 검색한 결과는 총{' '}
            {recipeItems.length}건 입니다.
          </p>
          <RecipeItems recipeItems={recipeItems} />
        </>
      ) : (
        <SkeletonRecipeItems />
      )}
    </StyledSearch>
  );
}
