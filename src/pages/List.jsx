import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAxiosData } from '@hooks/useAxiosData';
import { setPageState } from '@/redux';
import SkeletonRecipeItems from '@components/common/skeletons/SkeletonRecipeItems';
import RecipeItems from '@components/common/RecipeItems';
import Category from '@components/common/Category';
import scrollToTop from '@utils/scrollToTop';

const StyledList = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default function List() {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('전체');
  const [recipeItems, setRecipeItems] = useState(null);

  const { VITE_DB_URL } = import.meta.env;
  const endurl =
    selected === '전체'
      ? `${VITE_DB_URL}/basic?_page=1&_limit=20`
      : `${VITE_DB_URL}/basic?TYPE=${selected}&_page=1&_limit=20`;

  useEffect(() => {
    scrollToTop(0);
    dispatch(setPageState('list'));
  }, []);

  useEffect(() => {
    setRecipeItems(null);
    useAxiosData(endurl).then(res => {
      const resData = res.data;
      setRecipeItems(resData);
    });
  }, [selected]);
  return (
    <StyledList>
      <Category selected={selected} setSelected={setSelected} />
      {recipeItems ? (
        <RecipeItems recipeItems={recipeItems} />
      ) : (
        <SkeletonRecipeItems />
      )}
    </StyledList>
  );
}
