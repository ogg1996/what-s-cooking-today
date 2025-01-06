import {
  removeHistories,
  removeHistory,
  checkQueryExp
} from '@store/searchHistorySlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchModalHistory = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  & > div {
    display: flex;
    justify-content: space-between;

    & > span {
      color: #685443;
      font-family: 'Pretendard-bold';
      font-size: 18px;
      padding: 8px 16px;
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
    padding: 8px 16px;

    li {
      color: #685443;
      font-size: 18px;
      padding: 4px 8px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
    li:hover {
      background-color: #dddddd;
    }
  }
`;
const HistoryLink = styled.button`
  color: #685443;
  flex-grow: 1;
  text-align: start;
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

export default function SearchModalHistory({ closeSearchModal }) {
  const navigate = useNavigate();

  const searchHistory = useSelector(state => state.searchHistory.history);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkQueryExp());
  }, []);

  return (
    <StyledSearchModalHistory>
      <div>
        {searchHistory.length !== 0 && (
          <>
            <span>검색 기록</span>
            <button
              type="button"
              onClick={() => {
                dispatch(removeHistories());
              }}
            >
              전체삭제
            </button>
          </>
        )}
      </div>
      <ul>
        {searchHistory.map(el => (
          <li key={el.timeStamp}>
            <HistoryLink
              type="button"
              onClick={() =>
                closeSearchModal(navigate(`/search?query=${el.query}`))
              }
            >
              {el.query}
            </HistoryLink>
            <RemoveButton
              type="button"
              onClick={() => {
                dispatch(removeHistory(el.query));
              }}
            />
          </li>
        ))}
      </ul>
    </StyledSearchModalHistory>
  );
}
