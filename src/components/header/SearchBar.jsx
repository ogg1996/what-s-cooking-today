import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
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

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  return (
    <StyledSearchBar>
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
    </StyledSearchBar>
  );
}
