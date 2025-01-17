import styled, { keyframes } from 'styled-components';

const skeletonImgAnim = keyframes`
  0% {
    background-color: #dddddd;
  }
  25%{
    background-color: #dcdcdc;
  }
  50%{
    background-color: #cccccc;
  }
  75% {
    background-color: #dcdcdc;
  }
  100% {
    background-color: #dddddd;
  }
`;

const SkeletonImg = styled.span`
  width: ${props => (props.width ? `${props.width}` : '200px')};
  aspect-ratio: 1 / 1;
  border-radius: ${props => (props.radius ? `${props.radius}` : '6px')};
  background-color: #dddddd;

  animation: ${skeletonImgAnim} 2.5s infinite;
`;

export default SkeletonImg;
