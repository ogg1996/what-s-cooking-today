import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageState } from '@/redux';
import { useAxiosData } from '@/hooks/useAxiosData';
import SkeletonIngerdientsContainer from '@skeletons-detail/SkeletonIngredientsContainer';
import SkeletonBasicContainer from '@skeletons-detail/SkeletonBasicContainer';
import SkeletonCookingContainer from '@skeletons-detail/SkeletonCookingContainer';
import { useScrollTop } from '@/hooks/useScrollToY';

const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 20px;
  gap: 20px;

  & > div {
    h3 {
      font-size: 25px;
      margin-bottom: 10px;
    }
  }
`;

const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > h2 {
    font-size: 35px;
  }
  & > span {
    font-size: 18px;
    text-align: justify;
  }
  & > div {
    display: flex;
    justify-content: end;
    gap: 15px;
  }

  & > img {
    width: 100%;
    border-radius: 20px;
  }
`;

const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 10px;

    & > span {
      width: 33%;
      text-align: center;
      font-size: 20px;
    }
  }
`;

const IngredientList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > div {
    display: flex;
    justify-content: space-between;

    & > span {
      width: 33%;
      text-align: center;
      font-size: 16px;
    }
  }
`;

const CookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CookingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding-bottom: 15px;
    border-bottom: 1px solid #c4c4c4;

    p {
      line-height: 25px;
    }
    span {
      color: #888888;
    }
  }
  & > div:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export default function Detail() {
  const dispatch = useDispatch();

  const param = useParams();
  const [basicData, setBasicData] = useState(null);
  const [ingredientsData, setIngredientsData] = useState(null);
  const [cookingData, setCookingData] = useState(null);
  const stepNumber = [
    '',
    '①',
    '②',
    '③',
    '④',
    '⑤',
    '⑥',
    '⑦',
    '⑧',
    '⑨',
    '⑩',
    '⑪',
    '⑫',
    '⑬',
    '⑭',
    '⑮',
    '⑯',
    '⑰',
    '⑱',
    '⑲',
    '⑳'
  ];

  useEffect(() => {
    useScrollTop();
    dispatch(setPageState('detail'));

    const { VITE_DB_URL } = import.meta.env;

    useAxiosData(`${VITE_DB_URL}/basic?RECIPE_ID=${param.id}`).then(res => {
      const resData = res.data[0];
      setBasicData(resData);
    });

    useAxiosData(`${VITE_DB_URL}/cooking?RECIPE_ID=${param.id}`).then(res => {
      const resData = res.data;

      setCookingData(resData);
    });

    useAxiosData(`${VITE_DB_URL}/ingredients?RECIPE_ID=${param.id}`).then(
      res => {
        const resData = res.data;
        setIngredientsData(resData);
      }
    );
  }, []);

  return (
    <StyledDetail>
      {basicData ? (
        <BasicContainer>
          <h2>{basicData.NAME}</h2>
          <span>{basicData.SUMRY}</span>
          <div>
            <span>분류: {basicData.TYPE}</span>
            <span>조리시간: {basicData.COOKING_TIME}</span>
            <span>난이도: {basicData.LEVEL}</span>
          </div>
          <img src={basicData.IMG_URL} alt={basicData.NAME} />
        </BasicContainer>
      ) : (
        <SkeletonBasicContainer />
      )}
      {ingredientsData ? (
        <IngredientsContainer>
          <h3>준비 재료</h3>
          <div>
            <span>재료명</span>
            <span>필요량</span>
            <span>재료명</span>
          </div>
          <IngredientList>
            {ingredientsData.map(item => (
              <div key={item.ROW_NUM}>
                <span>{item.IRDNT_NM}</span>
                <span>{item.IRDNT_CPCTY}</span>
                <span>{item.IRDNT_TY_NM}</span>
              </div>
            ))}
          </IngredientList>
        </IngredientsContainer>
      ) : (
        <SkeletonIngerdientsContainer />
      )}
      {cookingData ? (
        <CookingContainer>
          <h3>조리 과정</h3>
          <CookingList>
            {cookingData.map(item => (
              <div key={item.STEP}>
                <p>
                  {stepNumber[item.STEP]} {item.DESC}
                </p>
                {item.STEP_TIP !== '' && <span>tip! {item.STEP_TIP}</span>}
                {item.IMG_URL !== '' && (
                  <img src={item.IMG_URL} alt={item.STEP} />
                )}
              </div>
            ))}
          </CookingList>
        </CookingContainer>
      ) : (
        <SkeletonCookingContainer />
      )}
    </StyledDetail>
  );
}
