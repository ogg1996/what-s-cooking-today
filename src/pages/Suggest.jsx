import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageState } from '@/redux';
import scrollToTop from '@utils/scrollToTop';
import CommentBox from '@components/pages/suggest/CommentBox';
import SuggestBox from '@components/pages/suggest/SuggestBox';
import SuggestBtn from '@components/pages/suggest/SuggestBtn';
import SuggestFoodTypes from '@components/pages/suggest/SuggestFoodTypes';
import suggestApi from '@api/suggestApi';

const StyledSuggest = styled.div`
  width: 450px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 450px) {
    width: 100%;
    margin: 0 30px;
  }
`;

export default function Suggest() {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('all');
  const [itemData, setItemData] = useState(null);
  const [isRecommend, setIsRecommend] = useState(false);

  const handleClick = () => {
    if (isRecommend) return;
    setTimeout(() => {
      setIsRecommend(false);
    }, 1500);
    suggestApi(selected).then(res => {
      setItemData(res);
      setIsRecommend(true);
    });
  };

  useEffect(() => {
    scrollToTop();
    dispatch(setPageState('suggest'));
  }, []);

  return (
    <StyledSuggest>
      <CommentBox />
      <SuggestBox itemData={itemData} isRecommend={isRecommend} />
      <SuggestFoodTypes selected={selected} setSelected={setSelected} />
      <SuggestBtn isRecommend={isRecommend} handleClick={handleClick} />
    </StyledSuggest>
  );
}
