import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addHistory } from '@store/searchHistorySlice';
import SearchBarHistory from '@components/layout/header/searchBar/SearchBarHistory';
import SearchBarRelatedSearchs from '@components/layout/header/searchBar/SearchBarRelatedSearchs';

const StyledSearchBar = styled.div`
  position: relative;
  min-width: 360px;
  max-width: 360px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 2px solid #8e8073;

  & > input {
    padding: 4px 0 4px 8px;
    flex-grow: 1;

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

const SearchDropDown = styled.div`
  position: absolute;
  top: 40px;
  display: flex;
  flex-direction: column;

  color: #685443;
  min-width: 360px;
  max-width: 360px;
  padding: 8px;
  background-color: #fefbf8;
  border: 2px solid #8e8073;
  border-radius: 4px;
`;

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const inputRef = useRef(null);
  const dropDownRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/search?query=${query}`);
      dispatch(addHistory(query));
      setDropdownVisible(false);
      setQuery('');
      inputRef.current.blur();
    }
  };

  return (
    <StyledSearchBar>
      <InputBox>
        <input
          type="text"
          placeholder="음식이름으로 검색!"
          spellCheck="false"
          onKeyUp={e => {
            if (e.key === 'Enter') handleSearch();
          }}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setDropdownVisible(true)}
          onBlur={e => {
            if (dropDownRef.current.contains(e.relatedTarget)) return;
            setDropdownVisible(false);
          }}
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
      {isDropdownVisible && (
        <SearchDropDown
          tabIndex={-1}
          ref={dropDownRef}
          onBlur={() => setDropdownVisible(false)}
        >
          {query === '' ? (
            <SearchBarHistory query={query} />
          ) : (
            <SearchBarRelatedSearchs query={query} />
          )}
        </SearchDropDown>
      )}
    </StyledSearchBar>
  );
}
