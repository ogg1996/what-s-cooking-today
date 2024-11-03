import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import SearchBar from '@components-header/SearchBar';

const StyledDefaultHeader = styled.header`
  z-index: 999;
  position: fixed;
  top: 0;

  width: 100%;
  height: 64px;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fefbf8;
  border-bottom: 1px solid #c4c4c4;

  @media (max-width: 500px) {
    height: 84px;
    flex-direction: column;
    padding: 10px 0;
  }
`;

const StyledDetailHeader = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;

  width: 100%;
  height: 64px;
  padding: 0 16px;

  display: flex;
  justify-content: start;
  align-items: center;

  background-color: #fefbf8;
  border-bottom: 1px solid #c4c4c4;
`;

const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }
  span {
    font-family: 'Cafe24Supermagic-Bold', 'arial';
    margin-left: 6px;
    font-size: 28px;
  }

  @media (max-width: 1000px) {
    img {
      width: 26px;
      height: 26px;
    }
    span {
      margin-left: 4px;
      font-size: 20px;
    }
  }
`;

const HeaderNav = styled.nav`
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
  font-size: 16px;
  color: ${({ $active }) => ($active ? '#e74c3c' : '#99806c;')};
`;

export default function Header() {
  const pageState = useSelector(state => state.pageState.page);

  const navigate = useNavigate();

  return (
    <div>
      {pageState === 'detail' ? (
        <StyledDetailHeader>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img
              src="https://whatscookingtoday.kro.kr/icons/icon-arrow-left.png"
              alt="뒤로가기"
            />
          </button>
        </StyledDetailHeader>
      ) : (
        <StyledDefaultHeader>
          <HeaderLogo to="/">
            <img
              src="https://whatscookingtoday.kro.kr/icons/icon-logo.png"
              alt="로고"
            />
            <span>오늘 뭐 해먹지?</span>
          </HeaderLogo>
          <SearchBar />
          <HeaderNav>
            <Link to="/suggest">
              <img
                src={
                  pageState === 'suggest'
                    ? 'https://whatscookingtoday.kro.kr/icons/icon-suggest-active.png'
                    : 'https://whatscookingtoday.kro.kr/icons/icon-suggest-default.png'
                }
                alt="아이콘"
              />
              <HeaderNavItem $active={pageState === 'suggest'}>
                메뉴 추천
              </HeaderNavItem>
            </Link>
            <Link to="/list">
              <img
                src={
                  pageState === 'list'
                    ? 'https://whatscookingtoday.kro.kr/icons/icon-list-active.png'
                    : 'https://whatscookingtoday.kro.kr/icons/icon-list-default.png'
                }
                alt="아이콘"
              />
              <HeaderNavItem $active={pageState === 'list'}>
                레시피 목록
              </HeaderNavItem>
            </Link>
          </HeaderNav>
        </StyledDefaultHeader>
      )}
    </div>
  );
}
