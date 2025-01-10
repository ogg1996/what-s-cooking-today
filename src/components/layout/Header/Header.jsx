import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setModalState } from '@store/modalStateSlice';
import SearchBar from '@components/layout/header/searchBar/SearchBar';
import HeaderNav from './HaederNav';

const StyledDefaultHeader = styled.header`
  z-index: 10;
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
`;

const StyledDetailHeader = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;

  width: 100%;
  height: 64px;
  padding: 0 16px;

  display: flex;
  justify-content: start;
  align-items: center;

  background-color: #fefbf8;
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
    font-family: 'Supermagic-Bold';
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

const SearchModalButton = styled.button`
  display: none;
  width: 24px;
  height: 24px;
  background-image: url('/icons/icon-search.png');
  background-size: cover;

  @media (max-width: 768px) {
    display: inline;
  }
`;

export default function Header() {
  const dispatch = useDispatch();
  const pageState = useSelector(state => state.pageState.page);
  const navigate = useNavigate();

  if (pageState === 'detail')
    return (
      <StyledDetailHeader>
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src="/icons/icon-arrow-left.png" alt="뒤로가기" />
        </button>
      </StyledDetailHeader>
    );

  return (
    <StyledDefaultHeader>
      <HeaderLogo to="/">
        <img src="/icons/icon-logo.png" alt="로고" />
        <span>오늘 뭐 해먹지?</span>
      </HeaderLogo>
      <SearchBar />
      <SearchModalButton
        type="button"
        onClick={() => dispatch(setModalState('search'))}
      />
      <HeaderNav />
    </StyledDefaultHeader>
  );
}
