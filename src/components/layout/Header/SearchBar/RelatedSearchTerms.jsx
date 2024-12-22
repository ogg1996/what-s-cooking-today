import searchApi from '@api/searchApi';
import { useQuery } from '@tanstack/react-query';
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
    font-size: 16px;
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
      font-size: 16px;
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
  const { data, isLoading } = useQuery({
    queryKey: ['searching', query],
    queryFn: () => searchApi(query, 1, 6)
  });

  return (
    <StyledRelatedSearchTerms tabIndex="0" className="maintainFocus">
      <p>연관 검색어</p>
      <ul>
        {!isLoading &&
          data.data.map(el => (
            <li key={el.RECIPE_ID}>
              <Link to={`/detail/${el.RECIPE_ID}`}>{el.NAME}</Link>
            </li>
          ))}
      </ul>
    </StyledRelatedSearchTerms>
  );
}
