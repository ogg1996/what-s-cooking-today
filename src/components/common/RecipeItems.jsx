import RecipeItem from '@components/common/RecipeItem';
import styled from 'styled-components';

const StyledRecipeItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 660px;

  @media (max-width: 675px) {
    max-width: 440px;
  }
  @media (max-width: 461px) {
    max-width: 370px;
  }
`;

export default function RecipeItems({ data }) {
  return (
    <StyledRecipeItems>
      {data.pages.map(page =>
        page.map(item => <RecipeItem key={item.RECIPE_ID} itemData={item} />)
      )}
    </StyledRecipeItems>
  );
}
