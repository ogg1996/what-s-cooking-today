import { searchKeywords } from '@/assets/searchKeywords';
import { getRegExp } from 'korean-regexp';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledRelatedSearchTerms = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;

  width: 100%;
  padding: 4px 4px;
  background-color: #ffffff;
  border: 2px solid #8e8073;
  border-top: 0;
  border-radius: 0 0 4px 4px;

  & > p {
    padding-left: 4px;
    padding-bottom: 4px;
    border-bottom: 2px solid #c4c4c4;
  }

  & > ul {
    padding: 0 8px;
    margin: 4px 0;
    max-height: 100px;
    overflow-y: scroll;

    li {
      font-size: 14px;
      display: flex;

      a {
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
export default function RelatedSearchTerms({ query }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(query);
    if (query.length < 2) return;
    const reg = getRegExp(query, {
      initialSearch: true,
      fuzzy: true
    });
    const filterdKeywords = searchKeywords.filter(keyward =>
      keyward.NAME.match(reg)
    );
    setList(filterdKeywords);
  }, [query]);
  return (
    <StyledRelatedSearchTerms>
      <p>연관 검색어</p>
      <ul>
        {list.map(el => (
          <li key={el.RECIPE_ID}>
            <Link to={`/detail/${el.RECIPE_ID}`}>{el.NAME}</Link>
          </li>
        ))}
      </ul>
    </StyledRelatedSearchTerms>
  );
}
