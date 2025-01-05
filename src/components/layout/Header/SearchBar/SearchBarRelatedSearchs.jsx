import searchApi from '@api/searchApi';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBarRelatedSearchs = styled.div`
  & > p {
    margin-bottom: 6px;
    font-family: 'Pretendard-bold';
  }

  & > ul {
    margin: 4px 0;
    max-height: 135px;
    overflow-y: hidden;

    li {
      padding: 4px 6px;
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
export default function SearchBarRelatedSearchs({ query }) {
  if (!query) return null;

  const { data, isLoading } = useQuery({
    queryKey: ['searchBarSearching', query],
    queryFn: () => searchApi(query, 1, 5)
  });

  return (
    <StyledSearchBarRelatedSearchs>
      <p>연관 검색어</p>
      <ul>
        {!isLoading &&
          data.data.map(el => (
            <li key={el.RECIPE_ID}>
              <Link to={`/detail/${el.RECIPE_ID}`}>{el.NAME}</Link>
            </li>
          ))}
      </ul>
    </StyledSearchBarRelatedSearchs>
  );
}
