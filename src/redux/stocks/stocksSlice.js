import { createSlice } from '@reduxjs/toolkit';
import fetchStocksData from './fetchApi';

const initialState = {
  data: [],
  isSuccess: false,
  message: '',
  loading: false,
};

const stocks = createSlice({
  name: 'Stocks',
  initialState,
  extraReducers: (builder) => {
    builder
    //   .addCase((fetchStocksData.pending, (state) => {
    //     state.loading = true;
    //     state.message = 'Loading...';
    //   }))
      .addCase((fetchStocksData.fulfilled, (state, action) => {
        state.loading = false;
        state.message = 'Successful';
        state.isSuccess = true;
        state.data = action.payload;
      }))
    //   .addCase((fetchStocksData.rejected, (state) => {
    //     state.loading = false;
    //     state.message = 'Error occured in fetching data';
    //     state.isSuccess = false;
    //   }));
  },

});

export default stocks.reducer;
