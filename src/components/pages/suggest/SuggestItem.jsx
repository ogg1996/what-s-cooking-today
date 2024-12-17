import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSuggestItem = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  gap: 16px;

  & > img {
    width: 200px;
    aspect-ratio: 1 / 1;
    border-radius: 4px;
    background-color: #dddddd;
  }

  & > p {
    color: #685443;
  }

  & > a {
    font-size: 18px;
    padding: 6px 16px;

    color: #fefbf8;
    background-color: #8e8073;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  & > a:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export default function SuggestItem({ itemData }) {
  if (itemData)
    return (
      <StyledSuggestItem>
        <img src={itemData.IMG_URL} loading="lazy" />
        <p>
          오늘의 추천 음식은 <strong>{itemData.NAME}</strong> 입니다!
        </p>
        <Link to={`/detail/${itemData.RECIPE_ID}`}>레시피 보러가기!</Link>
      </StyledSuggestItem>
    );
}
