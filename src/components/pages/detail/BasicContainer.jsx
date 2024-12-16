import styled from 'styled-components';

const StyledBasicContainer = styled.div`
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

export default function BasicContainer({ basicData }) {
  return (
    <StyledBasicContainer>
      <h2>{basicData.NAME}</h2>
      <span>{basicData.SUMRY}</span>
      <div>
        <span>분류: {basicData.TYPE}</span>
        <span>조리시간: {basicData.COOKING_TIME}</span>
        <span>난이도: {basicData.LEVEL}</span>
      </div>
      <img src={basicData.IMG_URL} alt={basicData.NAME} />
    </StyledBasicContainer>
  );
}
