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
import store from '@store/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

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
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #d68b44;
  }

  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    display: block;
    height: 0;
    background-color: transparent;
  }

`;

const queryClient = new QueryClient();
const persister = persistStore(store);

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>
);
