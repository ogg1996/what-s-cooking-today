import stepNumber from '@assets/stepNumber';
import styled from 'styled-components';

const StyledCookingContainer = styled.div`
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

    font-size: 18px;

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

export default function CookingContainer({ cookingData }) {
  return (
    <StyledCookingContainer>
      <h3>조리 과정</h3>
      <CookingList>
        {cookingData.map(item => (
          <div key={item.STEP}>
            <p>
              {stepNumber[item.STEP]} {item.DESC}
            </p>
            {item.STEP_TIP !== '' && <span>tip! {item.STEP_TIP}</span>}
            {item.IMG_URL !== '' && <img src={item.IMG_URL} alt={item.STEP} />}
          </div>
        ))}
      </CookingList>
    </StyledCookingContainer>
  );
}
