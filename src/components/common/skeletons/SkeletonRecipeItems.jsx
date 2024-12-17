import SkeletonRecipeItem from '@components/common/skeletons/SkeletonRecipeItem';
import styled from 'styled-components';

const StyledSkeletonRecipeItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1024px;
  padding: 16px;
`;

export default function SkeletonRecipeItems() {
  return (
    <StyledSkeletonRecipeItems>
      {Array.from({ length: 12 }).map((_, index) => (
        <SkeletonRecipeItem key={`skeleton-${index}-${Date.now()}`} />
      ))}
    </StyledSkeletonRecipeItems>
  );
}
