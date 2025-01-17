import SkeletonText from '@components/common/skeletons/SkeletonText';
import styled from 'styled-components';

const StyledSkeletonIngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > span {
    margin-bottom: 10px;
  }

  & > div {
    display: flex;
    justify-content: space-around;
  }

  & > div:nth-child(2),
  & > div:last-child {
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 10px;
  }
`;

export default function SkeletonIngerdientsContainer() {
  return (
    <StyledSkeletonIngredientsContainer>
      <SkeletonText width="100px" height="25px" />
      <div>
        <SkeletonText width="60px" height="20px" />
        <SkeletonText width="60px" height="20px" />
        <SkeletonText width="60px" height="20px" />
      </div>
      {Array.from({ length: 5 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <SkeletonText width="48px" height="16px" />
          <SkeletonText width="48px" height="16px" />
          <SkeletonText width="48px" height="16px" />
        </div>
      ))}
    </StyledSkeletonIngredientsContainer>
  );
}
