import styled from 'styled-components';
import SkeletonRecipeItem from './SkeletonRecipeItem';

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
      {Array.from({ length: 20 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SkeletonRecipeItem key={index} />
      ))}
    </StyledSkeletonRecipeItems>
  );
}
