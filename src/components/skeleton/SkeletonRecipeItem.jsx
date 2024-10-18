import styled from 'styled-components';

const StyledSkeletonRecipeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;

  & > div {
    width: 200px;
    height: 200px;
    border-radius: 8px;
    background-color: #dddddd;
  }
  & > span {
    width: 150px;
    height: 20px;
    border-radius: 6px;
    background-color: #dddddd;
  }

  @media (max-width: 461px) {
    & > div {
      width: 165px;
      height: 165px;
    }
    & > span {
      width: 125px;
      height: 16px;
    }
  }
`;

// TODO : 호버하면 뭔가 바뀌는게 있도록..
export default function SkeletonRecipeItem() {
  return (
    <StyledSkeletonRecipeItem>
      <div />
      <span />
    </StyledSkeletonRecipeItem>
  );
}
