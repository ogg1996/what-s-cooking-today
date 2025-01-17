import { createSlice } from '@reduxjs/toolkit';

export const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState: {
    history: []
  },
  reducers: {
    checkQueryExp: state => {
      const today = new Date();
      const aWeekAgo = new Date();
      aWeekAgo.setTime(today.getTime() - 1000 * 60 * 10);
      const aWeekAgoTimeStamp = aWeekAgo.getTime();

      state.history = state.history.filter(
        el => el.timeStamp >= aWeekAgoTimeStamp
      );
    },
    addHistory: (state, action) => {
      const query = action.payload;

      state.history = [
        { query, timeStamp: Number(new Date()) },
        ...state.history.filter(el => el.query !== query)
      ];
    },
    removeHistories: state => {
      state.history = [];
    },
    removeHistory: (state, action) => {
      state.history = state.history.filter(el => el.query !== action.payload);
    }
  }
});

export const { addHistory, removeHistories, removeHistory, checkQueryExp } =
  searchHistorySlice.actions;
