import RecipeItem from '@components/common/RecipeItem';
import styled from 'styled-components';

const StyledRecipeItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  width: 100%;
  padding: 16px;
`;

export default function RecipeItems({ data }) {
  return (
    <StyledRecipeItems>
      {data.pages.map(page =>
        page.data.map(item => (
          <RecipeItem key={item.RECIPE_ID} itemData={item} />
        ))
      )}
    </StyledRecipeItems>
  );
}
