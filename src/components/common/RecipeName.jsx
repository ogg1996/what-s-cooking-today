import { getRegExp } from 'korean-regexp';
import styled from 'styled-components';

const StyledRecipeName = styled.div`
  color: #685443;
  & > span {
    color: #d68b44;
  }
`;

export default function RecipeName({ recipeName, query }) {
  const reg = getRegExp(query, {
    initialSearch: true
  });

  const matchQuery = recipeName.match(reg)[0];
  const splitQuery = recipeName.split(matchQuery);

  return (
    <StyledRecipeName>
      {splitQuery[0]}
      <span>{matchQuery}</span>
      {splitQuery[1]}
    </StyledRecipeName>
  );
}
