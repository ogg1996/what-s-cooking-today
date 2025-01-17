import styled from 'styled-components';

const StyledCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  & > img {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
  }
  & > span {
    font-family: 'Supermagic-Bold';
    font-size: 18px;
  }
`;

export default function CommentBox() {
  return (
    <StyledCommentBox>
      <img src="/icons/icon-logo.png" alt="로고" />
      <span>오늘 뭐 해먹지?</span>
      <span>메뉴 추천해 드릴게요!</span>
    </StyledCommentBox>
  );
}
