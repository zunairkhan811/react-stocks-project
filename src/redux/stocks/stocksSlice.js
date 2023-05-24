import { createSlice } from '@reduxjs/toolkit';
import fetchStocksData from './fetchApi';

const initialState = {
  data: [],
  isSuccess: false,
  message: '',
  loading: false,
};

const newBooks = (payload) => {
  
};
const stocks = createSlice({
  name: 'Stocks',
  initialState,
  extraReducers: (builder) => {
    
  },

});

export default stocks.reducer;
