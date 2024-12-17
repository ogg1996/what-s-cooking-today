import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledRecipeItem = styled.div`
  width: 50%;
  aspect-ratio: 1 / 1.3;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 85%;
    padding: 6px;
    border-radius: 4px;

    & > img {
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 4px;
      background-color: #dddddd;
    }
  }

  & > a:hover {
    transform: scale(1.1);
    transition: 0.3s;
    background-color: #e6e1db;
  }

  @media (min-width: 550px) {
    width: 33.3%;
  }
  @media (min-width: 800px) {
    width: 25%;
  }
`;

const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    text-align: left;
    min-height: 42px;
    font-family: 'Pretendard-bold';
    color: #685443;
    font-size: 18px;
  }

  & > div {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    color: #999999;
  }
`;

export default function RecipeItem({ itemData }) {
  const { ref, isIntersecting } = useIntersectionObserver();

  if (itemData) {
    useEffect(() => {
      if (isIntersecting && itemData) {
        ref.current.src = itemData.IMG_URL;
      }
    }, [ref, isIntersecting]);

    return (
      <StyledRecipeItem>
        <Link to={`/detail/${itemData.RECIPE_ID}`}>
          <img ref={ref} loading="lazy" />
          <RecipeInfo>
            <span>{itemData.NAME}</span>
            <div>
              <span>{itemData.LEVEL}</span>
              <span>{itemData.COOKING_TIME}</span>
            </div>
          </RecipeInfo>
        </Link>
      </StyledRecipeItem>
    );
  }
}
