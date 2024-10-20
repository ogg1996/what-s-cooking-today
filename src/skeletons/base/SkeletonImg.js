import styled from 'styled-components';

const SkeletonImg = styled.span`
  width: ${props => (props.width ? `${props.width}` : '200px')};
  aspect-ratio: 1;
  border-radius: ${props => (props.radius ? `${props.radius}` : '6px')};
  background-color: #dddddd;
`;

export default SkeletonImg;
