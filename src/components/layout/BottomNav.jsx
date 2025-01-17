import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledBottomNav = styled.nav`
  display: none;

  @media (max-width: 1000px) {
    display: flex;

    z-index: 10;
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
    }
  }
`;

const ButtomNavItem = styled.span`
  font-family: ${({ $active }) =>
    $active ? 'Pretendard-bold' : 'Pretendard-Medium'};
  font-size: 12px;
  color: ${({ $active }) => ($active ? '#e74c3c' : '#99806c;')};
`;

export default function BottomNav() {
  const pageState = useSelector(state => state.pageState.page);
  return (
    <StyledBottomNav>
      <Link to="/suggest">
        <img
          src={
            pageState === 'suggest'
              ? '/icons/icon-suggest-active.png'
              : '/icons/icon-suggest-default.png'
          }
          alt="아이콘"
        />
        <ButtomNavItem $active={pageState === 'suggest'}>
          메뉴 추천
        </ButtomNavItem>
      </Link>
      <Link to="/list/all">
        <img
          src={
            pageState === 'list'
              ? '/icons/icon-list-active.png'
              : '/icons/icon-list-default.png'
          }
          alt="아이콘"
        />
        <ButtomNavItem $active={pageState === 'list'}>
          레시피 목록
        </ButtomNavItem>
      </Link>
    </StyledBottomNav>
  );
}
