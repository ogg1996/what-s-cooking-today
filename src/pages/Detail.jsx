import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageState } from '@/store/pageStateSlice';
import scrollToTop from '@utils/scrollToTop';
import SkeletonBasicContainer from '@components/pages/detail/skeletons/SkeletonBasicContainer';
import SkeletonIngerdientsContainer from '@components/pages/detail/skeletons/SkeletonIngredientsContainer';
import SkeletonCookingContainer from '@components/pages/detail/skeletons/SkeletonCookingContainer';
import BasicContainer from '@components/pages/detail/BasicContainer';
import IngredientsContainer from '@components/pages/detail/IngredientsContainer';
import CookingContainer from '@components/pages/detail/CookingContainer';
import { useQuery } from '@tanstack/react-query';
import detailAPi from '@api/detailApi';

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

  const { data, isLoading } = useQuery({
    queryKey: ['detail', param.id],
    queryFn: () => detailAPi(param.id)
  });

  useEffect(() => {
    scrollToTop();
    dispatch(setPageState('detail'));
  }, []);

  return (
    <StyledDetail>
      {isLoading ? (
        <>
          <SkeletonBasicContainer />
          <SkeletonIngerdientsContainer />
          <SkeletonCookingContainer />
        </>
      ) : (
        <>
          <BasicContainer basicData={data.basicData} />
          <IngredientsContainer ingredientsData={data.ingredientsData} />
          <CookingContainer cookingData={data.cookingData} />
        </>
      )}
    </StyledDetail>
  );
}
