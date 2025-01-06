import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Suggest from '@pages/Suggest';
import List from '@pages/List';
import Search from '@pages/Search';
import Detail from '@pages/Detail';

import BottomNav from '@components/layout/BottomNav';
import Modal from '@components/layout/modal/Modal';
import { useSelector } from 'react-redux';
import Header from '@components/layout/Header/Header';
import { useEffect } from 'react';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  padding-top: 94px;
  padding-bottom: 30px;

  @media (max-width: 1000px) {
    padding-bottom: 82px;
  }
  @media (max-width: 500px) {
    padding-top: 114px;
  }
`;

export default function App() {
  const modalState = useSelector(state => state.modalState.modal);

  useEffect(() => {
    if (modalState) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [modalState]);

  return (
    <>
      {modalState && <Modal />}
      <Header />
      <StyledApp>
        <Routes>
          <Route path="/" element={<Suggest />} />
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/list/:type" element={<List />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </StyledApp>
      <BottomNav />
    </>
  );
}
