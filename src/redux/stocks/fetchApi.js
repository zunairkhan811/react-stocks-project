import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=50&apikey=0ff5ab7898405604cc45414f3acad284';
const fetchStocksData = createAsyncThunk('Stocks/get', async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error('Error occurred in fetching data');
  }
});

export default fetchStocksData;
