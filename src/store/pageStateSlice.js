import { createSlice } from '@reduxjs/toolkit';

export const pageStateSlice = createSlice({
  name: 'pageState',
  initialState: {
    page: null
  },
  reducers: {
    setPageState: (state, action) => {
      state.page = action.payload;
    }
  }
});

export const { setPageState } = pageStateSlice.actions;
