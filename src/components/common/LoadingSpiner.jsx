import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from{transform:rotate(0)}
  to{transform:rotate(360deg)}
`;

const LoadingImg = styled.img`
  animation: ${rotate} 1s ease-in-out infinite;
`;

export default function LoadingSpiner() {
  return <LoadingImg src="/icons/icon-loading.png" />;
}
