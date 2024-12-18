import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setPageState } from '@/redux';
import { useAxiosData } from '@/hooks/useAxiosData';
import scrollToTop from '@utils/scrollToTop';
import RecipeItems from '@components/common/RecipeItems';
import SkeletonRecipeItems from '@components/common/skeletons/SkeletonRecipeItems';
import { useInfiniteQuery } from '@tanstack/react-query';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import LoadingSpiner from '@components/common/LoadingSpiner';
import SkeletonText from '@components/common/skeletons/SkeletonText';

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > p {
    padding: 0 10px;

    font-size: 20px;
    text-align: center;
    color: #685443;
  }
`;

export default function Search() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { VITE_DB_URL } = import.meta.env;

  useEffect(() => {
    scrollToTop();
    dispatch(setPageState('search'));
  }, [query]);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['search', query],
      queryFn: ({ pageParam }) =>
        useAxiosData(
          `${VITE_DB_URL}/basic?NAME_like=${query}&_page=${pageParam}&_limit=12`
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
    <StyledSearch>
      {!isLoading && data ? (
        <>
          <p>
            <strong>{query}</strong> &#40;으&#41;로 검색한 결과입니다.
          </p>
          <RecipeItems data={data} />
        </>
      ) : (
        <>
          <SkeletonText width="250px" height="19px" />
          <SkeletonRecipeItems />
        </>
      )}
      {hasNextPage && (
        <div ref={ref}>
          <LoadingSpiner />
        </div>
      )}
    </StyledSearch>
  );
}
