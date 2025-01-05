import {
  removeHistories,
  removeHistory,
  checkQueryExp
} from '@store/searchHistorySlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBarHistory = styled.div`
  & > div {
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;

    & > span {
      font-family: 'Pretendard-bold';
    }
    & > button {
      font-size: 12px;
      color: #999999;
    }
    & > button:hover {
      color: #ff0000;
    }
  }

  & > ul {
    max-height: 135px;
    overflow-y: hidden;

    li {
      padding: 4px 6px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      & > a {
        flex-grow: 1;
        text-align: start;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    li:hover {
      background-color: #dddddd;
    }
  }
`;

const RemoveButton = styled.button`
  width: 18px;
  height: 18px;
  margin-right: 4px;
  border: none;
  border-radius: 4px;
  background-image: url('/icons/icon-cancel-default.png');
  background-size: cover;

  &:hover {
    background-image: url('/icons/icon-cancel-active.png');
  }
`;

export default function SearchBarHistory() {
  const searchHistory = useSelector(state => state.searchHistory.history);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkQueryExp());
  }, []);

  return (
    <StyledSearchBarHistory>
      <div>
        <span>검색 기록</span>
        {searchHistory.length !== 0 && (
          <button
            type="button"
            onClick={() => {
              dispatch(removeHistories());
            }}
          >
            전체삭제
          </button>
        )}
      </div>
      {searchHistory ? (
        <p>검색기록이 없습니다.</p>
      ) : (
        <ul>
          {searchHistory.map(el => (
            <li key={el.timeStamp}>
              <Link to={`/search?query=${el.query}`}>{el.query}</Link>
              <RemoveButton
                type="button"
                onClick={() => {
                  dispatch(removeHistory(el.query));
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </StyledSearchBarHistory>
  );
}
