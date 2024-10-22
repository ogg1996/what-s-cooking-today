import styled from 'styled-components';
import SkeletonText from '../base/SkeletonText';

const StyledSkeletonCookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function SkeletonCookingContainer() {
  return (
    <StyledSkeletonCookingContainer>
      <SkeletonText width="100px" height="25px" />
      {Array.from({ length: 6 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SkeletonText key={index} width="90%" height="20px" />
      ))}
    </StyledSkeletonCookingContainer>
  );
}
