import searchApi from '@api/searchApi';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBarRelatedSearchs = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    padding: 8px 16px;
    color: #685443;
    font-family: 'Pretendard-bold';
    font-size: 18px;
  }

  & > ul {
    margin: 4px 0;
    padding: 8px 16px;
    overflow-y: scroll;

    & > li {
      padding: 8px 8px;
      display: flex;
      gap: 8px;
      cursor: pointer;

      & > img {
        width: 42px;
        height: 42px;
        background-color: #777777;
      }

      & > div {
        & > p {
          color: #685443;
        }
        & > div {
          color: #777777;
          display: flex;
          gap: 8px;
        }
      }
    }

    li:hover {
      background-color: #dddddd;
    }
  }
`;
export default function SearchModalRelatedSearchs({ closeSearchModal, query }) {
  if (!query) return null;

  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ['modalSearching', query],
    queryFn: () => searchApi(query, 1, 20)
  });

  return (
    <StyledSearchBarRelatedSearchs>
      <p>연관 검색어</p>
      <ul>
        {!isLoading &&
          data.data.map(el => (
            <li key={el.RECIPE_ID}>
              <button
                type="button"
                onClick={() => {
                  closeSearchModal(navigate(`/detail/${el.RECIPE_ID}`));
                }}
              >
                <img src={el.IMG_URL} loading="lazy" />
                <div>
                  <p>{el.NAME}</p>
                  <div>
                    <span>{el.TYPE}</span>
                    <span>{el.LEVEL}</span>
                    <span>{el.COOKING_TIME}</span>
                  </div>
                </div>
              </button>
            </li>
          ))}
      </ul>
    </StyledSearchBarRelatedSearchs>
  );
}
