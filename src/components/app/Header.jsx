import logoIcon from '@icons/icon-logo.png';
import defaultListIcon from '@icons/icon-list-default.png';
import defaultSuggestIcon from '@icons/icon-suggest-default.png';
import activeListIcon from '@icons/icon-list-active.png';
import activeSuggestIcon from '@icons/icon-suggest-active.png';
import allowLeftIcon from '@icons/icon-arrow-left.png';

import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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

const HeaderSearchBar = styled.div`
  display: flex;
  gap: 10px;

  & > input {
    padding: 2px 12px 0 12px;
    height: 28px;
    width: 300px;

    color: #000000;
    background-color: #fefbf8;
    border: none;
    outline: none;
    border-bottom: #8e8073 2px solid;
  }
  & > input:focus {
    padding: 0 12px;
    padding-left: 10px;
    background-color: #ffffff;
    border: 2px solid #8e8073;
    border-radius: 4px 4px 0 0;
  }

  & > button {
    width: 60px;
    height: 28px;

    color: #fefbf8;
    background-color: #8e8073;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  & > button:active {
    background-color: #c4c4c4;
  }

  @media (max-width: 650px) {
    & > input {
      width: 200px;
    }
  }
  @media (max-width: 500px) {
    & > input {
      width: 300px;
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

/*
  TODO : 검색창 포커스시 검색창이 비어 있다면 일주일간 
  검색 기록 아래로 드랍다운, 검색창이 입력 된다면 
  검색어와 관련된 음식목록이 드랍다운 되도록..
*/
export default function Header() {
  const pageState = useSelector(state => state.pageState.page);
  const [query, setQuery] = useState('');

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
            <img src={allowLeftIcon} alt="뒤로가기" />
          </button>
        </StyledDetailHeader>
      ) : (
        <StyledDefaultHeader>
          <HeaderLogo to="/">
            <img src={logoIcon} alt="로고" />
            <span>오늘 뭐 해먹지?</span>
          </HeaderLogo>
          <HeaderSearchBar>
            <input
              type="text"
              placeholder="음식이름으로 검색!"
              onChange={e => setQuery(e.target.value.split(' ').join(''))}
            />
            <button
              type="button"
              onClick={() => {
                if (query !== '') navigate(`/search?query=${query}`);
              }}
            >
              검색
            </button>
          </HeaderSearchBar>
          <HeaderNav>
            <Link to="/suggest">
              <img
                src={
                  pageState === 'suggest'
                    ? activeSuggestIcon
                    : defaultSuggestIcon
                }
                alt="아이콘"
              />
              <HeaderNavItem $active={pageState === 'suggest'}>
                메뉴 추천
              </HeaderNavItem>
            </Link>
            <Link to="/list">
              <img
                src={pageState === 'list' ? activeListIcon : defaultListIcon}
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
