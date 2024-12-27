import { createSlice } from '@reduxjs/toolkit';

export const modalStateSlice = createSlice({
  name: 'modalState',
  initialState: {
    modal: null
  },
  reducers: {
    setModalState: (state, action) => {
      state.modal = action.payload;
    }
  }
});

export const { setModalState } = modalStateSlice.actions;
