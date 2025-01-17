import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { modalStateSlice } from '@store/modalStateSlice';
import { pageStateSlice } from '@store/pageStateSlice';
import { searchHistorySlice } from '@store/searchHistorySlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['searchHistory']
};

const rootReducer = combineReducers({
  modalState: modalStateSlice.reducer,
  pageState: pageStateSlice.reducer,
  searchHistory: searchHistorySlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
});

export default store;
