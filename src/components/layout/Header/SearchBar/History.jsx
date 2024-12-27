import {
  removeHistories,
  removeHistory,
  checkQueryExp
} from '@store/searchHistorySlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHistory = styled.div`
  & > div {
    padding: 0 4px 4px 4px;
    border-bottom: 2px solid #c4c4c4;

    display: flex;
    justify-content: space-between;

    & > span {
      font-size: 20px;
    }
    & > button {
      font-size: 14px;
      color: #999999;
    }
    & > button:hover {
      color: #ff0000;
    }
  }

  & > ul {
    margin: 4px 0;
    max-height: 105px;
    overflow-y: hidden;

    li {
      font-size: 18px;
      padding: 0 4px 0 8px;

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

export default function History() {
  const searchHistory = useSelector(state => state.searchHistory.history);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkQueryExp());
  }, []);

  return (
    <StyledHistory>
      <div>
        <span>검색 기록</span>
        <button
          type="button"
          onClick={() => {
            dispatch(removeHistories());
          }}
        >
          전체삭제
        </button>
      </div>
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
    </StyledHistory>
  );
}
