import { useState } from 'react';
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

    & > strong {
      color: #d68b44;
    }
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
  a:hover {
    background-color: #d68b44;
  }
`;

const ImgContainer = styled.div`
  width: 200px;
  aspect-ratio: 1 / 1;
  border-radius: 4px;
  background-color: #dddddd;

  & > img {
    width: 100%;
    aspect-ratio: 1 /1;
    border-radius: 4px;
    opacity: ${({ $isImgLoaded }) => ($isImgLoaded ? 1 : 0)};
    transition: transform 0.3s ease-in-out;
  }
`;

export default function SuggestItem({ itemData }) {
  const [isImgLoaded, setImgLoaded] = useState(false);
  if (itemData)
    return (
      <StyledSuggestItem>
        <ImgContainer $isImgLoaded={isImgLoaded}>
          <img src={itemData.IMG_URL} onLoad={() => setImgLoaded(true)} />
        </ImgContainer>
        <p>
          오늘의 추천 음식은 <strong>{itemData.NAME}</strong> 입니다!
        </p>
        <Link to={`/detail/${itemData.RECIPE_ID}`}>레시피 보러가기!</Link>
      </StyledSuggestItem>
    );
}
