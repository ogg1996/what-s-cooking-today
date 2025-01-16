import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Suggest from '@pages/Suggest';
import List from '@pages/List';
import Search from '@pages/Search';
import Detail from '@pages/Detail';

import Header from '@components/layout/header/Header';
import BottomNav from '@components/layout/BottomNav';
import Modal from '@components/layout/modal/Modal';
import scrollToTop from '@utils/scrollToTop';

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

const topButtonHoverAnim = keyframes`
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-3%);
  }
  20% {
    transform: translateY(-6%);
  }
  30% {
    transform: translateY(-9%);
  }
  40% {
    transform: translateY(-12%);
  }
  50% {
    transform: translateY(-15%);
  }
  60% {
    transform: translateY(-12%);
  }
  70% {
    transform: translateY(-9%);
  }
  80% {
    transform: translateY(-6%);
  }
  90% {
    transform: translateY(-3%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const TopButton = styled.button`
  position: fixed;

  right: 20px;
  bottom: 20px;

  width: 48px;
  height: 48px;

  border-radius: 50%;

  @media (max-width: 1000px) {
    right: 10px;
    bottom: 72px;
  }

  &:hover {
    animation: ${topButtonHoverAnim} 0.5s infinite;
  }
`;

export default function App() {
  const modalState = useSelector(state => state.modalState.modal);
  const pageState = useSelector(state => state.pageState.page);

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
      {(pageState === 'list' ||
        pageState === 'detail' ||
        pageState === 'search') && (
        <TopButton type="button" onClick={() => scrollToTop('smooth')}>
          <img src="/icons/icon-arrow-top.png" />
        </TopButton>
      )}
    </>
  );
}
