import SkeletonImg from '@components/common/skeletons/SkeletonImg';
import SkeletonText from '@components/common/skeletons/SkeletonText';
import styled from 'styled-components';

const StyledSkeletonRecipeItem = styled.div`
  width: 50%;
  aspect-ratio: 1 / 1.3;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    padding: 12px;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 21px;

      & > div {
        display: flex;
        justify-content: flex-end;
        gap: 16px;
        color: #999999;
      }
    }
  }

  @media (min-width: 625px) {
    width: 33.3%;
  }
  @media (min-width: 800px) {
    width: 25%;
  }
`;

export default function SkeletonRecipeItem() {
  return (
    <StyledSkeletonRecipeItem>
      <div>
        <SkeletonImg width="100%" radius="4px" />
        <div>
          <SkeletonText width="60%" height="21px" />
          <div>
            <SkeletonText width="20%" height="19px" />
            <SkeletonText width="20%" height="19px" />
          </div>
        </div>
      </div>
    </StyledSkeletonRecipeItem>
  );
}
