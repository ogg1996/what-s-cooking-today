import { configureStore, createSlice } from '@reduxjs/toolkit';

const pageStateSlice = createSlice({
  name: 'pageState',
  initialState: {
    page: ''
  },
  reducers: {
    setPageState: (state, action) => {
      // eslint에서는 불변성 때문에 오류를 보내지만 redux-toolkit은 Immer를
      // 사용하여 불변성을 자동으로 처리하므로 오류표시 안되게 아래 주석을 추가함
      // eslint-disable-next-line no-param-reassign
      state.page = action.payload;
    }
  }
});

export const store = configureStore({
  reducer: {
    pageState: pageStateSlice.reducer
  }
});

export const { setPageState } = pageStateSlice.actions;
