import styled from 'styled-components';

const StyledModal = styled.div`
  width: 50%;
  height: 100vh;
  background-color: white;
`;

export default function SearchModal() {
  return <StyledModal onClick={e => e.stopPropagation()} />;
}
