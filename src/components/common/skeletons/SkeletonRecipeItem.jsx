import SkeletonImg from '@components/common/skeletons/SkeletonImg';
import SkeletonText from '@components/common/skeletons/SkeletonText';
import styled from 'styled-components';

const StyledSkeletonRecipeItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: 220px;

  @media (max-width: 461px) {
    width: 185px;
  }
`;

// TODO : 호버하면 뭔가 바뀌는게 있도록..
export default function SkeletonRecipeItem() {
  return (
    <StyledSkeletonRecipeItem>
      <SkeletonImg width="100%" radius="8px" />
      <SkeletonText width="80%" height="20px" />
    </StyledSkeletonRecipeItem>
  );
}
