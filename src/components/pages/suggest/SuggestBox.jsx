import RecipeItem from '@components/common/RecipeItem';
import styled, { keyframes } from 'styled-components';

const StyledSuggestBox = styled.div`
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
    background-image: url('/icons/icon-suggest-menu-1.png');
  }
  12.5% {
    background-image: url('/icons/icon-suggest-menu-2.png');
  }
  25% {
    background-image: url('/icons/icon-suggest-menu-3.png');
  }
  37.5% {
    background-image: url('/icons/icon-suggest-menu-4.png');
  }
  50% {
    background-image: url('/icons/icon-suggest-menu-5.png');
  }
  62.5% {
    background-image: url('/icons/icon-suggest-menu-6.png');
  }
  75% {
    background-image: url('/icons/icon-suggest-menu-7.png');
  }
  87.5% {
    background-image: url('/icons/icon-suggest-menu-8.png');     
  }
  100% {
    background-image: url('/icons/icon-suggest-menu-1.png');
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

export default function SuggestBox({ itemData, isRecommend }) {
  return (
    <StyledSuggestBox>
      {!itemData && !isRecommend && (
        <>
          <span>옵션을 선택하고</span>
          <span>&apos;메뉴를 추천해줘!&apos;를 눌러보세요</span>
        </>
      )}
      {itemData && !isRecommend ? (
        <RecipeItem itemData={itemData} />
      ) : (
        isRecommend && (
          <>
            <SuggestAnimBox />
            <span>메뉴 추천중...</span>
          </>
        )
      )}
    </StyledSuggestBox>
  );
}
