import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setModalState } from '@store/modalStateSlice';
import SearchModal from './SearchModal';

const Dimmed = styled.div`
  display: grid;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 20;
`;

export default function Modal() {
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modalState.modal);

  return (
    <Dimmed
      onClick={() => {
        dispatch(setModalState(null));
      }}
    >
      {modalState === 'search' && <SearchModal />}
    </Dimmed>
  );
}
