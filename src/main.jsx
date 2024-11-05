import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import '@/styles/reset.css';
import { store } from './redux';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-medium';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Cafe24Supermagic-Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/Cafe24Supermagic-Bold-v1.0.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  * {
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  body {
    background-color: #fefbf8;
  }
  
  #root{
    font-family: 'Pretendard-medium','arial';
  }

`;

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
