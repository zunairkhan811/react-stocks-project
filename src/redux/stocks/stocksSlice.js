import { createSlice } from '@reduxjs/toolkit';
import fetchStocksData from './fetchApi';

const initialState = {
  data: [],
  message: '',
  isLoading: false,
  isError: false,
};

const stocks = createSlice({
  name: 'Stocks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocksData.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.message = 'Loading...';
      })
      .addCase(fetchStocksData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
        state.data = action.payload;
      })
      .addCase(fetchStocksData.rejected, (state) => {
        state.isLoading = false;
        state.message = 'Error occured in fetching data';
        state.isError = true;
      });
  },

});

export default stocks.reducer;
