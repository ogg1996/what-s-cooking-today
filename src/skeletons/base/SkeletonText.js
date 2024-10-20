import styled from 'styled-components';

const SkeletonText = styled.span`
  width: ${props => (props.width ? `${props.width}` : '200px')};
  height: ${props => (props.height ? `${props.height}` : '20px')};
  border-radius: ${props => (props.radius ? `${props.radius}` : '6px')};
  background-color: #dddddd;
`;

export default SkeletonText;
