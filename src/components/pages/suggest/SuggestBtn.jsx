import styled from 'styled-components';

const SuggestButton = styled.button`
  font-size: 22px;
  height: 60px;

  color: #fefbf8;
  background-color: #8e8073;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #d68b44;
  }
`;

const ActiveSuggestButton = styled(SuggestButton)`
  background-color: #c4c4c4;

  &:hover {
    background-color: #c4c4c4;
  }
`;

export default function SuggestBtn({ isRecommend, handleClick }) {
  if (isRecommend)
    return (
      <ActiveSuggestButton type="button">메뉴를 추천해줘!</ActiveSuggestButton>
    );

  return (
    <SuggestButton type="button" onClick={handleClick}>
      메뉴를 추천해줘!
    </SuggestButton>
  );
}
