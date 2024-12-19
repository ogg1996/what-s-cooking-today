import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAxiosData } from '@hooks/useAxiosData';
import { setPageState } from '@/redux';
import SkeletonRecipeItems from '@components/common/skeletons/SkeletonRecipeItems';
import RecipeItems from '@components/common/RecipeItems';
import scrollToTop from '@utils/scrollToTop';
import LoadingSpiner from '@components/common/LoadingSpiner';
import { useInfiniteQuery } from '@tanstack/react-query';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { useParams } from 'react-router-dom';
import ListFoodTypes from '@components/pages/list/ListFoodTypes';
import foodTypes from '@assets/foodTypes';

const StyledList = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;
`;

export default function List() {
  const dispatch = useDispatch();
  const param = useParams();

  const selectedType = foodTypes.find(type => type.en === param.type);

  const { VITE_DB_URL } = import.meta.env;

  useEffect(() => {
    scrollToTop();
    dispatch(setPageState('list'));
  }, []);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['list', param],
      queryFn: ({ pageParam }) =>
        useAxiosData(
          param.type === 'all'
            ? `${VITE_DB_URL}/basic?_page=${pageParam}&_limit=12`
            : `${VITE_DB_URL}/basic?TYPE=${selectedType.kr}&_page=${pageParam}&_limit=12`
        ).then(res => {
          const resData = res.data;
          return resData;
        }),
      getNextPageParam: (last, all) => {
        if (last.length < 12) return undefined;
        return all.length + 1;
      },
      initialPageParam: 1
    });

  const { ref, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting]);

  return (
    <StyledList>
      <ListFoodTypes />
      {!isLoading && data ? (
        <RecipeItems data={data} />
      ) : (
        <SkeletonRecipeItems />
      )}
      {hasNextPage && (
        <div ref={ref}>
          <LoadingSpiner />
        </div>
      )}
    </StyledList>
  );
}
