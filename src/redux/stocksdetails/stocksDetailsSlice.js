import { createSlice } from '@reduxjs/toolkit';
import details from './DetailsApi';

const initialState = {
  data: [],
  isError: false,
  message: '',
  isLoading: false,
};

const stocksDetails = createSlice({
  name: 'StocksDetails',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(details.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.message = 'Loading...';
      })
      .addCase(details.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = 'Successful';
        state.data = action.payload;
      })
      .addCase(details.rejected, (state) => {
        state.isLoading = false;
        state.message = 'Error occured in fetching details';
        state.isError = true;
      });
  },

});

export default stocksDetails.reducer;
