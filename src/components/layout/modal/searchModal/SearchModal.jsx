import SearchModalHistory from '@components/layout/modal/searchModal/SearchModalHistory';
import SearchModalRelatedSearchs from '@components/layout/modal/searchModal/SearchModalRelatedSearchs';
import { setModalState } from '@store/modalStateSlice';
import { addHistory } from '@store/searchHistorySlice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { useDebounce } from 'use-debounce';

const onSearchModal = keyframes`
  from {
    transform: translateX(5%);
    opacity: 0.5;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const offSearchModal = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(10%);
    opacity: 0.5;

  }
`;

const StyledModal = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isVisible'
})`
  width: 100%;
  max-width: 768px;
  height: 100vh;
  padding: 16px;
  justify-self: end;
  background-color: #fefbf8;

  display: flex;
  flex-direction: column;
  gap: 16px;

  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${onSearchModal} 0.3s ease-in-out
        `
      : css`
          ${offSearchModal} 0.3s ease-in-out
        `};
`;

const InputArea = styled.div`
  display: flex;
  gap: 8px;
`;

const InputBox = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 2px solid #8e8073;

  & > input {
    padding: 4px 0 4px 8px;
    flex-grow: 1;

    color: #000000;
    background-color: #fefbf8;
    border: none;
    outline: none;
  }

  & > p {
    margin-top: 0;
  }
`;

const ClearButton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url('/icons/icon-cancel-default.png');
  background-size: cover;

  &:hover {
    background-image: url('/icons/icon-cancel-active.png');
  }
`;

const SearchButton = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 8px;

  background-image: url('/icons/icon-search.png');
  background-size: cover;
`;

const CancelButton = styled.button`
  background-color: #8e8073;
  width: 48px;
  color: #fefbf8;
  border-radius: 4px;
`;

export default function SearchModal() {
  const [query, setQuery] = useState('');
  const [isVisible, setVisible] = useState(true);
  const [debounceQuery] = useDebounce(query, 500);

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const closeSearchModal = (callback = () => {}) => {
    setVisible(false);
    setTimeout(() => {
      dispatch(setModalState(null));
      if (callback) {
        callback();
      }
    }, 200);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      closeSearchModal(() => {
        dispatch(addHistory(query));
        navigate(`/search?query=${query}`);
      });
    }
  };

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <StyledModal isVisible={isVisible} onClick={e => e.stopPropagation()}>
      <InputArea>
        <InputBox>
          <input
            type="text"
            placeholder="음식이름으로 검색!"
            spellCheck="false"
            onKeyUp={e => {
              if (e.key === 'Enter') handleSearch();
            }}
            onChange={e => setQuery(e.target.value)}
            ref={inputRef}
            value={query}
          />
          {query && (
            <ClearButton
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current.focus();
              }}
            />
          )}
          <SearchButton type="button" onClick={handleSearch} />
        </InputBox>
        <CancelButton type="button" onClick={() => closeSearchModal()}>
          취소
        </CancelButton>
      </InputArea>
      {debounceQuery === '' ? (
        <SearchModalHistory closeSearchModal={closeSearchModal} />
      ) : (
        <SearchModalRelatedSearchs
          closeSearchModal={closeSearchModal}
          query={query}
        />
      )}
    </StyledModal>
  );
}
