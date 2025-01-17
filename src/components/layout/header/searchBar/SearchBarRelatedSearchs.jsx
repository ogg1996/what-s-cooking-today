import searchApi from '@api/searchApi';
import RecipeName from '@components/common/RecipeName';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBarRelatedSearchs = styled.div`
  & > div {
    margin-bottom: 6px;

    & > span {
      font-family: 'Pretendard-bold';
    }
  }

  & > p {
    padding: 4px 6px;
  }

  & > ul {
    max-height: 135px;
    overflow-y: hidden;

    li {
      padding: 4px 6px;
      display: flex;

      a {
        flex-grow: 1;
        text-align: start;
      }
    }

    li:hover {
      background-color: #dddddd;
    }
  }
`;

export default function SearchBarRelatedSearchs({ query }) {
  const { data, isLoading } = useQuery({
    queryKey: ['searchBarSearching', query],
    queryFn: () => searchApi(query, 1, 5)
  });

  return (
    <StyledSearchBarRelatedSearchs>
      <div>
        <span>연관 검색어</span>
      </div>
      {!isLoading &&
        (!data.total ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          <ul>
            {data.data.map(el => (
              <li key={el.RECIPE_ID}>
                <Link to={`/detail/${el.RECIPE_ID}`}>
                  <RecipeName recipeName={el.NAME} query={query} />
                </Link>
              </li>
            ))}
          </ul>
        ))}
    </StyledSearchBarRelatedSearchs>
  );
}
