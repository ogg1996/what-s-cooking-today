import styled from 'styled-components';
import RecipeItem from './RecipeItem';

const StyledRecipeItems = styled.div`
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

export default function RecipeItems({ recipeItems }) {
  return (
    <StyledRecipeItems>
      {recipeItems.map(item => (
        <RecipeItem key={item.RECIPE_ID} itemData={item} />
      ))}
    </StyledRecipeItems>
  );
}
