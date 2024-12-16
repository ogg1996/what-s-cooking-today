import SkeletonRecipeItem from '@components/common/skeletons/SkeletonRecipeItem';
import styled from 'styled-components';

const StyledSkeletonRecipeItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 660px;

  @media (max-width: 661px) {
    max-width: 440px;
  }
  @media (max-width: 461px) {
    max-width: 370px;
  }
`;

export default function SkeletonRecipeItems() {
  return (
    <StyledSkeletonRecipeItems>
      {Array.from({ length: 12 }).map(() => (
        <SkeletonRecipeItem key={Number(Date())} />
      ))}
    </StyledSkeletonRecipeItems>
  );
}
