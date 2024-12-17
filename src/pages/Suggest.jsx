import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageState } from '@/redux';
import { useAxiosData } from '@/hooks/useAxiosData';
import Category from '@components/common/Category';
import scrollToTop from '@utils/scrollToTop';
import CommentBox from '@components/pages/suggest/CommentBox';
import SuggestBox from '@components/pages/suggest/SuggestBox';
import SuggestBtn from '@components/pages/suggest/SuggestBtn';

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

  const [selected, setSelected] = useState('전체');
  const [itemData, setItemData] = useState(null);
  const [isRecommend, setIsRecommend] = useState(false);

  const handleClick = () => {
    if (isRecommend) return;
    setIsRecommend(true);
    const { VITE_DB_URL } = import.meta.env;
    const endurl =
      selected === '전체'
        ? `${VITE_DB_URL}/basic`
        : `${VITE_DB_URL}/basic?TYPE=${selected}`;
    setTimeout(() => {
      setIsRecommend(false);
    }, 1500);

    useAxiosData(endurl).then(res => {
      const resData = res.data;
      const randomIndex = Math.floor(Math.random() * resData.length);
      setItemData(resData[randomIndex]);
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
      <Category selected={selected} setSelected={setSelected} />
      <SuggestBtn isRecommend={isRecommend} handleClick={handleClick} />
    </StyledSuggest>
  );
}
