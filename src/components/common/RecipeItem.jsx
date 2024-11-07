import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledRecipeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;

  & > div {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;

    width: 200px;
    background-image: url(${props => props.$setUrl});
    background-color: #dddddd;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    aspect-ratio: 1;

    & > span {
      display: none;
      color: white;
      text-align: right;
      font-family: 'Pretendard-Bold';
      font-size: 16px;
    }
    & > span:first-child {
      text-align: justify;
      flex-grow: 1;
    }
  }

  & > span {
    font-size: 20px;
  }

  &:active,
  &:hover {
    & > div {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${props => props.$setUrl});
      & > span {
        display: inline;
      }
    }
  }

  @media (max-width: 461px) {
    & > div {
      width: 165px;

      & > span {
        font-size: 16px;
      }
    }
    & > span {
      font-size: 16px;
    }
  }
`;

export default function RecipeItem({ itemData }) {
  const navigate = useNavigate();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {itemData && (
        <StyledRecipeItem
          onClick={() => navigate(`/detail/${itemData.RECIPE_ID}`)}
          $setUrl={itemData.IMG_URL}
        >
          <div>
            <span>{itemData.SUMRY}</span>
            <span>분류: {itemData.TYPE}</span>
            <span>난이도: {itemData.LEVEL}</span>
            <span>조리시간: {itemData.COOKING_TIME}</span>
          </div>
          <span>{itemData.NAME}</span>
        </StyledRecipeItem>
      )}
    </>
  );
}
