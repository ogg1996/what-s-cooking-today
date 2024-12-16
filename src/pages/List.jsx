import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAxiosData } from '@hooks/useAxiosData';
import { setPageState } from '@/redux';
import SkeletonRecipeItems from '@components/common/skeletons/SkeletonRecipeItems';
import RecipeItems from '@components/common/RecipeItems';
import Category from '@components/common/Category';
import scrollToTop from '@utils/scrollToTop';
import LoadingSpiner from '@components/common/LoadingSpiner';
import { useInfiniteQuery } from '@tanstack/react-query';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

const StyledList = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default function List() {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('전체');

  const { VITE_DB_URL } = import.meta.env;

  useEffect(() => {
    scrollToTop();
    dispatch(setPageState('list'));
  }, []);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['list', selected],
      queryFn: ({ pageParam }) =>
        useAxiosData(
          selected === '전체'
            ? `${VITE_DB_URL}/basic?_page=${pageParam}&_limit=20`
            : `${VITE_DB_URL}/basic?TYPE=${selected}&_page=${pageParam}&_limit=20`
        ).then(res => {
          const resData = res.data;
          return resData;
        }),
      getNextPageParam: (last, all) => {
        if (last.length < 20) return undefined;
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
      <Category selected={selected} setSelected={setSelected} />
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
