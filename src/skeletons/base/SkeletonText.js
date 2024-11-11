import styled, { keyframes } from 'styled-components';

const skeletonTextAnim = keyframes`
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

const SkeletonText = styled.span`
  width: ${props => (props.width ? `${props.width}` : '200px')};
  height: ${props => (props.height ? `${props.height}` : '20px')};
  border-radius: ${props => (props.radius ? `${props.radius}` : '6px')};
  background-color: #dddddd;

  animation: ${skeletonTextAnim} 2.5s infinite;
`;

export default SkeletonText;
