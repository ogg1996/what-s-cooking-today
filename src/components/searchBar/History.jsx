import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHistory = styled.div`
  display: 'flex';
  flex-direction: column;
  position: absolute;

  width: 100%;
  padding: 4px 4px;
  background-color: #ffffff;
  border: 2px solid #8e8073;
  border-top: 0;
  border-radius: 0 0 4px 4px;

  & > div {
    padding: 0 4px 4px 4px;
    border-bottom: 2px solid #c4c4c4;

    display: flex;
    justify-content: space-between;

    & > span {
      font-size: 24px;
    }
    & > button {
      font-size: 20px;
      color: #c4c4c4;
    }
    & > button:hover,
    & > button:active {
      color: #ff0000;
    }
  }
  & > ul {
    padding: 0 4px 0 8px;
    margin: 4px 0;
    max-height: 100px;
    overflow-y: scroll;

    li {
      font-size: 20px;

      display: flex;
      justify-content: space-between;

      & > a {
        width: 85%;
        text-align: start;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & > button {
        width: 15%;
        font-size: 16px;
        color: #c4c4c4;
      }
      & > button:hover,
      & > button:active {
        color: #ff0000;
      }
    }
    li:hover,
    li:active {
      background-color: #dddddd;
    }
  }
`;
export default function History() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const histories = JSON.parse(localStorage.getItem('histories')) || [];
    const today = new Date();
    const aWeekAgo = new Date();
    aWeekAgo.setDate(today.getDate() - 7);

    const aWeekAgoTimeStamp = aWeekAgo.getTime();
    const filteredHistories = histories.filter(
      el => el.timeStamp >= aWeekAgoTimeStamp
    );
    localStorage.setItem('histories', JSON.stringify(filteredHistories));

    setList(filteredHistories);
  }, []);

  function removeHistories() {
    localStorage.removeItem('histories');
  }

  function removeHistory(query) {
    const newHistories = list.filter(el => el.query !== query);
    localStorage.setItem('histories', JSON.stringify(newHistories));
    return newHistories;
  }

  return (
    <StyledHistory tabIndex="0" className="maintainFocus">
      <div>
        <span>검색 기록</span>
        <button
          className="maintainFocus"
          onClick={() => {
            removeHistories();
            setList([]);
          }}
        >
          전체삭제
        </button>
      </div>
      <ul>
        {list.map(el => (
          <li key={el.timeStamp}>
            <Link to={`/search?query=${el.query}`}>{el.query}</Link>
            <button
              className="maintainFocus"
              onClick={() => {
                const histories = removeHistory(el.query);
                setList(histories);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </StyledHistory>
  );
}
