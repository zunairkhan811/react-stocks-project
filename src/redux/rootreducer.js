import { combineReducers } from '@reduxjs/toolkit';
import stocksSlice from './stocks/stocksSlice';
import stocksDetailsSlice from './stocksdetails/stocksDetailsSlice';

const rootReducer = combineReducers({
  stocksList: stocksSlice,
  stocksDetails: stocksDetailsSlice,
});

export default rootReducer;
