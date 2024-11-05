import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from '@components-app/Header';
import BottomNav from '@components-app/BottomNav';
import Detail from '@/pages/Detail';
import List from '@/pages/List';
import Search from '@/pages/Search';
import Suggest from '@/pages/Suggest';

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
  return (
    <>
      <Header />
      <StyledApp>
        <Routes>
          <Route path="/" element={<Suggest />} />
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/list" element={<List />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </StyledApp>
      <BottomNav />
    </>
  );
}
