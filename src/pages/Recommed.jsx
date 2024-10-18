import styled from 'styled-components';
import logoIcon from '@assets/images/icons/icon-logo.png';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAxiosData } from '../hooks/useAxiosData';
import RecipeItem from '../components/common/RecipeItem';
import Category from '../components/common/Category';
import { setPageState } from '../redux';

const StyledRecommend = styled.div`
  width: 450px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  & > button {
    font-size: 22px;
    height: 60px;

    color: #fefbf8;
    background-color: #8e8073;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  & > button:active {
    background-color: #c4c4c4;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 30px;
  }
`;

// 컴포넌트명을 어떻게 지어야 할까요..?
const LogoAndTitle = styled.div`
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

// TODO : 추천할 때 애니메이션 출력
export default function Recommend() {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('전체');
  const [itemData, setItemData] = useState(null);

  const handleClick = () => {
    const { VITE_DB_URL } = import.meta.env;
    // 옵션에 따라 받아오는 데이터가 다르도록
    const endurl =
      selected === '전체'
        ? `${VITE_DB_URL}/basic`
        : `${VITE_DB_URL}/basic?TYPE=${selected}`;
    useAxiosData(endurl).then(res => {
      const resData = res.data;
      const randomIndex = Math.floor(Math.random() * resData.length);
      setItemData(resData[randomIndex]);
    });
  };

  useEffect(() => {
    dispatch(setPageState('recommend'));
  }, []);

  return (
    <StyledRecommend>
      <LogoAndTitle>
        <img src={logoIcon} alt="로고" />
        <span>오늘 뭐 해먹지?</span>
        <span>메뉴 추천해 드릴게요!</span>
      </LogoAndTitle>
      <ResultBox>
        {!itemData ? (
          <>
            <span>옵션을 선택하고</span>
            <span>&apos;메뉴를 추천해줘!&apos;를 눌러보세요</span>
          </>
        ) : (
          <>
            <span>음식 레시피를 보고 싶으시면</span>
            <span>클릭해주세요!</span>
            <span>↓ ↓ ↓</span>
            <RecipeItem itemData={itemData} />
          </>
        )}
      </ResultBox>
      <Category selected={selected} setSelected={setSelected} />
      <button type="button" onClick={handleClick}>
        메뉴를 추천해줘!
      </button>
    </StyledRecommend>
  );
}
