import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://financialmodelingprep.com/api/v3/quote/';
const key = '?apikey=0ff5ab7898405604cc45414f3acad284';
const details = createAsyncThunk('StocksDetails/get', async (symbol) => {
  try {
    const data = await axios.get(url + symbol + key);
    return data.json();
  } catch (error) {
    throw new Error('Error occurred in fetching Details');
  }
});

export default details;
