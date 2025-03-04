import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageState } from '@/store/pageStateSlice';
import scrollToTop from '@utils/scrollToTop';
import CommentBox from '@components/pages/suggest/CommentBox';
import SuggestBox from '@components/pages/suggest/SuggestBox';
import SuggestBtn from '@components/pages/suggest/SuggestBtn';
import SuggestFoodTypes from '@components/pages/suggest/SuggestFoodTypes';
import suggestApi from '@api/suggestApi';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigationType } from 'react-router-dom';

const StyledSuggest = styled.div`
  width: 450px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 500px) {
    width: 100%;
    margin: 0 30px;
  }
`;

export default function Suggest() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [selected, setSelected] = useState('all');
  const [isRecommend, setIsRecommend] = useState(false);

  const useNaviType = useNavigationType();

  const queryKey = ['suggest'];

  const { data, refetch } = useQuery({
    queryKey,
    queryFn: () => suggestApi(selected),
    enabled: false
  });

  useEffect(() => {
    if (useNaviType === 'PUSH') {
      queryClient.removeQueries({ queryKey });
    }

    scrollToTop();
    dispatch(setPageState('suggest'));
  }, []);

  const handleClick = () => {
    if (isRecommend) return;
    setTimeout(() => {
      setIsRecommend(false);
    }, 1500);
    refetch();
    setIsRecommend(true);
  };

  return (
    <StyledSuggest>
      <CommentBox />
      <SuggestBox itemData={data} isRecommend={isRecommend} />
      <SuggestFoodTypes selected={selected} setSelected={setSelected} />
      <SuggestBtn isRecommend={isRecommend} handleClick={handleClick} />
    </StyledSuggest>
  );
}
