import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import '@/styles/reset.css';
import '@/styles/Pretendard-Bold.css';
import '@/styles/Pretendard-Medium.css';
import '@/styles/Supermagic-Bold.css';
import { store } from './redux';

const GlobalStyle = createGlobalStyle`
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
    font-family: 'Pretendard-medium';
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
