import styled from 'styled-components';

const StyledIngredientsContainer = styled.div`
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

export default function IngredientsContainer({ ingredientsData }) {
  return (
    <StyledIngredientsContainer>
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
    </StyledIngredientsContainer>
  );
}
