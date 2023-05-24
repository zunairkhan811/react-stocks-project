import { createSlice } from '@reduxjs/toolkit';
import details from './DetailsApi';

const initialState = {
  data: [],
  isSuccess: false,
  message: '',
  loading: false,
};

const stocksDetails = createSlice({
  name: 'StocksDetails',
  initialState,
  extraReducers: (builder) => {
    builder
    //   .addCase((details.pending, (state) => {
    //     state.loading = true;
    //     state.message = 'Loading...';
    //   }))
      .addCase((details.fulfilled, (state, action) => {
        state.loading = false;
        state.message = 'Successful';
        state.isSuccess = true;
        state.data = action.payload;
      }))
    //   .addCase((details.rejected, (state) => {
    //     state.loading = false;
    //     state.message = 'Error occured in fetching details';
    //     state.isSuccess = false;
    //   }));
  },

});

export default stocksDetails.reducer;
