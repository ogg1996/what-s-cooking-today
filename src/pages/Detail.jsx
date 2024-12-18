import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageState } from '@/redux';
import { useAxiosData } from '@/hooks/useAxiosData';
import scrollToTop from '@utils/scrollToTop';
import SkeletonBasicContainer from '@components/pages/detail/skeletons/SkeletonBasicContainer';
import SkeletonIngerdientsContainer from '@components/pages/detail/skeletons/SkeletonIngredientsContainer';
import SkeletonCookingContainer from '@components/pages/detail/skeletons/SkeletonCookingContainer';
import BasicContainer from '@components/pages/detail/BasicContainer';
import IngredientsContainer from '@components/pages/detail/IngredientsContainer';
import CookingContainer from '@components/pages/detail/CookingContainer';

const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 20px;
  gap: 20px;

  & > div {
    h3 {
      font-size: 25px;
      margin-bottom: 10px;
    }
  }
`;

export default function Detail() {
  const dispatch = useDispatch();

  const param = useParams();
  const [basicData, setBasicData] = useState(null);
  const [ingredientsData, setIngredientsData] = useState(null);
  const [cookingData, setCookingData] = useState(null);

  useEffect(() => {
    scrollToTop();
    dispatch(setPageState('detail'));

    const { VITE_DB_URL } = import.meta.env;

    useAxiosData(`${VITE_DB_URL}/basic?RECIPE_ID=${param.id}`).then(res => {
      const resData = res.data[0];
      setBasicData(resData);
    });

    useAxiosData(`${VITE_DB_URL}/cooking?RECIPE_ID=${param.id}`).then(res => {
      const resData = res.data;
      setCookingData(resData);
    });

    useAxiosData(`${VITE_DB_URL}/ingredients?RECIPE_ID=${param.id}`).then(
      res => {
        const resData = res.data;
        setIngredientsData(resData);
      }
    );
  }, []);

  return (
    <StyledDetail>
      {basicData ? (
        <BasicContainer basicData={basicData} />
      ) : (
        <SkeletonBasicContainer />
      )}
      {ingredientsData ? (
        <IngredientsContainer ingredientsData={ingredientsData} />
      ) : (
        <SkeletonIngerdientsContainer />
      )}
      {cookingData ? (
        <CookingContainer cookingData={cookingData} />
      ) : (
        <SkeletonCookingContainer />
      )}
    </StyledDetail>
  );
}
