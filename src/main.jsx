import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import App from '@/App';
import '@styles/reset.css';
import '@styles/font/Pretendard-Bold.css';
import '@styles/font/Pretendard-Medium.css';
import '@styles/font/Supermagic-Bold.css';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './redux';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    font-display: block;
  }

  body {
    background-color: #fefbf8;
  }
  
  #root{
    font-family: 'Pretendard-medium';
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 2.5px;
  }

  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    display: block;
    height: 0;
    background-color: transparent;
  }

`;

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);
