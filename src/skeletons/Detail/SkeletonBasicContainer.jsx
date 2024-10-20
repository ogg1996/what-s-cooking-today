import styled from 'styled-components';
import SkeletonText from '../base/SkeletonText';
import SkeletonImg from '../base/SkeletonImg';

const StyledSkeletonBasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div {
    display: flex;
    justify-content: end;
    gap: 15px;
  }
`;

export default function SkeletonBasicContainer() {
  return (
    <StyledSkeletonBasicContainer>
      <SkeletonText width="200px" height="35px" radius="8px" />
      <SkeletonText width="100%" height="18px" />
      <div>
        <SkeletonText width="64px" height="16px" />
        <SkeletonText width="97px" height="16px" />
        <SkeletonText width="77px" height="16px" />
      </div>
      <SkeletonImg width="100%" radius="20px" />
    </StyledSkeletonBasicContainer>
  );
}
