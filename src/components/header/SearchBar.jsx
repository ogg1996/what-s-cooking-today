import History from '@components-searchBar/History';
import RelatedSearchTerms from '@components-searchBar/RelatedSearchTerms';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex;
  gap: 10px;

  & > div {
    position: relative;
    input {
      padding: 2px 12px 0 12px;
      height: 28px;
      width: 300px;

      color: #000000;
      background-color: #fefbf8;
      border: none;
      outline: none;
      border-bottom: #8e8073 2px solid;
    }
    p {
      margin-top: 0;
    }
  }
  & {
    div > input:focus {
      padding: 0 12px;
      padding-left: 10px;
      background-color: #ffffff;
      border: 2px solid #8e8073;
      border-radius: 4px 4px 0 0;
    }
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
    & > div {
      input {
        width: 200px;
      }
    }
  }
  @media (max-width: 500px) {
    & > div {
      input {
        width: 300px;
      }
    }
  }
`;

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const navigate = useNavigate();

  const inputRef = useRef(null);

  function addHistory() {
    if (!localStorage.getItem('histories')) {
      localStorage.setItem('histories', '[]');
    }

    const histories = JSON.parse(localStorage.getItem('histories'));
    const filteredHistories = histories.filter(el => el.query !== query);

    const history = {
      query: query,
      timeStamp: Number(new Date())
    };
    console.log(history.timeStamp);

    const newHistories = [history, ...filteredHistories];
    localStorage.setItem('histories', JSON.stringify(newHistories));
  }

  const handleSearch = () => {
    if (query !== '') {
      navigate(`/search?query=${query}`);
      inputRef.current.blur();
      addHistory();
      setIsFocus(false);
      setQuery('');
    }
  };
  const handleInput = e => {
    const input = e.target.value.split(' ').join('');
    setQuery(input);
  };

  const handleInputFocus = e => {
    if (
      e.relatedTarget &&
      e.relatedTarget.classList.contains('maintainFocus')
    ) {
      inputRef.current.focus();
    } else {
      setTimeout(() => setIsFocus(false), 100);
    }
  };

  return (
    <>
      <StyledSearchBar>
        <div>
          <input
            type="text"
            placeholder="음식이름으로 검색!"
            ref={inputRef}
            onChange={e => handleInput(e)}
            onKeyUp={e => {
              if (e.key === 'Enter') handleSearch();
            }}
            onFocus={() => setIsFocus(true)}
            // onBlur={handleInputFocus}
            value={query}
          />
          {isFocus &&
            (query === '' ? <History /> : <RelatedSearchTerms query={query} />)}
        </div>
        <button type="button" onClick={handleSearch}>
          검색
        </button>
      </StyledSearchBar>
    </>
  );
}
