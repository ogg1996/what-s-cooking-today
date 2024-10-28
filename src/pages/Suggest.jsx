import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Category from '@components-common/Category';
import RecipeItem from '@components-common/RecipeItem';
import { setPageState } from '@/redux';
import { useAxiosData } from '@/hooks/useAxiosData';

const StyledSuggest = styled.div`
  width: 450px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 30px;
  }
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  & > img {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
  }
  & > span {
    font-family: 'Cafe24Supermagic-Bold', 'arial';
    font-size: 18px;
  }
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  height: 350px;

  background-color: #f6f1eb;
  border-radius: 8px;

  & > span {
    color: #685443;
  }
`;

const changeMenu = keyframes`
  0% {
    background-image: url('https://whatscookingtoday.kro.kr/suggestMenus/suggestMenu-1.png');
  }
  12.5% {
    background-image: url('https://whatscookingtoday.kro.kr/suggestMenus/suggestMenu-2.png');
  }
  25% {
    background-image: url('https://whatscookingtoday.kro.kr/suggestMenus/suggestMenu-3.png');
  }
  37.5% {
    background-image: url('https://whatscookingtoday.kro.kr/suggestMenus/suggestMenu-4.png');
  }
  50% {
    background-image: url('https://whatscookingtoday.kro.kr/suggestMenus/suggestMenu-5.png');
  }
  62.5% {
    background-image: url('https://whatscookingtoday.kro.kr/suggestMenus/suggestMenu-6.png');
  }
  75% {
    background-image: url('https://whatscookingtoday.kro.kr/suggestMenus/suggestMenu-7.png');
  }
  87.5% {
    background-image: url('https://whatscookingtoday.kro.kr/suggestMenus/suggestMenu-8.png');
  }
  100% {
    background-image: url('https://whatscookingtoday.kro.kr/suggestMenus/suggestMenu-1.png');
  }
`;

const SuggestAnimBox = styled.div`
  width: 200px;
  margin-bottom: 20px;
  aspect-ratio: 1;
  background-size: cover;
  background-position: center;
  animation: ${changeMenu} 1s infinite;

  @media (max-width: 461px) {
    width: 165px;
  }
`;

const SuggestButton = styled.button`
  font-size: 22px;
  height: 60px;

  color: #fefbf8;
  background-color: #8e8073;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const ActiveSuggestButton = styled(SuggestButton)`
  background-color: #c4c4c4;
`;

// TODO : 추천할 때 애니메이션 출력
export default function Suggest() {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('전체');
  const [itemData, setItemData] = useState(null);
  const [isRecommend, setIsRecommend] = useState(false);

  const handleClick = () => {
    if (isRecommend) return;
    setIsRecommend(true);
    const { VITE_DB_URL } = import.meta.env;
    // 옵션에 따라 받아오는 데이터가 다르도록
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
    dispatch(setPageState('suggest'));
  }, []);

  return (
    <StyledSuggest>
      <CommentBox>
        <img
          src="https://whatscookingtoday.kro.kr/icons/icon-logo.png"
          alt="로고"
        />
        <span>오늘 뭐 해먹지?</span>
        <span>메뉴 추천해 드릴게요!</span>
      </CommentBox>
      <ResultBox>
        {!itemData && (
          <>
            <span>옵션을 선택하고</span>
            <span>&apos;메뉴를 추천해줘!&apos;를 눌러보세요</span>
          </>
        )}
        {itemData && !isRecommend ? (
          <>
            <span>음식 레시피를 보고 싶으시면</span>
            <span>클릭해주세요!</span>
            <span>↓ ↓ ↓</span>
            <RecipeItem itemData={itemData} />
          </>
        ) : (
          isRecommend && (
            <>
              <SuggestAnimBox />
              <span>메뉴 추천중...</span>
            </>
          )
        )}
      </ResultBox>
      <Category selected={selected} setSelected={setSelected} />
      {!isRecommend ? (
        <SuggestButton type="button" onClick={handleClick}>
          메뉴를 추천해줘!
        </SuggestButton>
      ) : (
        <ActiveSuggestButton type="button">
          메뉴를 추천해줘!
        </ActiveSuggestButton>
      )}
    </StyledSuggest>
  );
}
