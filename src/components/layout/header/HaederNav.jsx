import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  & > a {
    display: flex;
    align-items: center;
    cursor: pointer;

    gap: 6px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const HeaderNavItem = styled.span`
  font-family: ${({ $active }) =>
    $active ? 'Pretendard-bold' : 'Pretendard-Medium'};
  font-size: 16px;
  color: ${({ $active }) => ($active ? '#e74c3c' : '#99806c;')};
`;

export default function HeaderNav() {
  const pageState = useSelector(state => state.pageState.page);

  return (
    <StyledHeaderNav>
      <Link to="/suggest">
        <img
          src={
            pageState === 'suggest'
              ? '/icons/icon-suggest-active.png'
              : '/icons/icon-suggest-default.png'
          }
          alt="아이콘"
        />
        <HeaderNavItem $active={pageState === 'suggest'}>
          메뉴 추천
        </HeaderNavItem>
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
        <HeaderNavItem $active={pageState === 'list'}>
          레시피 목록
        </HeaderNavItem>
      </Link>
    </StyledHeaderNav>
  );
}
