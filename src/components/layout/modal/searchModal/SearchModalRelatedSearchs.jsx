import searchApi from '@api/searchApi';
import RecipeName from '@components/common/RecipeName';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBarRelatedSearchs = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  & > p {
    padding: 8px 16px;
    color: #685443;
    font-family: 'Pretendard-bold';
    font-size: 18px;
  }
  & > span {
    padding: 8px 24px;
    color: #685443;
    font-size: 16px;
  }

  & > ul {
    margin: 4px 0;
    padding: 8px 16px;

    & > li {
      & > button {
        width: 100%;
        padding: 8px 8px;
        display: flex;
        gap: 8px;
        text-align: start;

        & > img {
          width: 42px;
          height: 42px;
          border-radius: 4px;
          background-color: #777777;
        }

        & > div {
          flex-grow: 1;
          width: 240px;
          text-align: start;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    li:hover {
      background-color: #dddddd;
    }
  }
`;

const RecipeSummaryInfoBox = styled.div`
  color: #777777;
  display: flex;
  gap: 8px;
`;

export default function SearchModalRelatedSearchs({ closeSearchModal, query }) {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ['modalSearching', query],
    queryFn: () => searchApi(query, 1, 20)
  });

  return (
    <StyledSearchBarRelatedSearchs>
      <p>연관 검색어</p>
      {!isLoading &&
        (!data.total ? (
          <span>검색 결과가 없습니다.</span>
        ) : (
          <ul>
            {data.data.map(el => (
              <li key={el.RECIPE_ID}>
                <button
                  type="button"
                  onClick={() => {
                    closeSearchModal(navigate(`/detail/${el.RECIPE_ID}`));
                  }}
                >
                  <img src={el.IMG_URL} loading="lazy" />
                  <div>
                    <RecipeName recipeName={el.NAME} query={query} />
                    <RecipeSummaryInfoBox>
                      <span>{el.TYPE}</span>
                      <span>{el.LEVEL}</span>
                      <span>{el.COOKING_TIME}</span>
                    </RecipeSummaryInfoBox>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ))}
    </StyledSearchBarRelatedSearchs>
  );
}
