import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageState } from '@/redux';
import SkeletonRecipeItems from '@components/common/skeletons/SkeletonRecipeItems';
import RecipeItems from '@components/common/RecipeItems';
import scrollToTop from '@utils/scrollToTop';
import LoadingSpiner from '@components/common/LoadingSpiner';
import { useInfiniteQuery } from '@tanstack/react-query';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { useParams } from 'react-router-dom';
import ListFoodTypes from '@components/pages/list/ListFoodTypes';
import listApi from '@api/listApi';

const StyledList = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;
`;

export default function List() {
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    scrollToTop();
    dispatch(setPageState('list'));
  }, []);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['list', param.type],
      queryFn: ({ pageParam }) => listApi(param.type, pageParam, 12),
      getNextPageParam: last => {
        if (last.page === last.totalPages) return undefined;
        return last.page + 1;
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
