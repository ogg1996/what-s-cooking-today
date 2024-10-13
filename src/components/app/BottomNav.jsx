import styled from 'styled-components';
import defaultListIcon from '@assets/images/icons/icon-list-default.png';
import defaultRecommendIcon from '@assets/images/icons/icon-recommend-default.png';
import activeListIcon from '@assets/images/icons/icon-list-active.png';
import activeRecommendIcon from '@assets/images/icons/icon-recommend-active.png';
import { Link } from 'react-router-dom';

const StyledBottomNav = styled.nav`
  display: none;

  @media (max-width: 1000px) {
    display: flex;

    z-index: 999;
    position: fixed;
    bottom: 0px;

    width: 100%;
    height: 52px;
    padding: 0 16px;

    background-color: #f6f1eb;
    border-top: 1px solid #c4c4c4;

    & > a {
      flex-grow: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
      }
      span {
        color: #99806c;
        font-size: 12px;
      }
    }
  }
`;

export default function BottomNav() {
  return (
    <StyledBottomNav>
      <Link to="/recommend">
        <img src={defaultRecommendIcon} alt="아이콘" />
        <span>메뉴 추천</span>
      </Link>
      <Link to="/recipeList">
        <img src={defaultListIcon} alt="아이콘" />
        <span>레시피 목록</span>
      </Link>
    </StyledBottomNav>
  );
}
