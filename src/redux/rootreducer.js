import { combineReducers } from '@reduxjs/toolkit';
import stocksReducer from './stocks/stocksSlice';
import stocksDetailsReducer from './stocksdetails/stocksDetailsSlice';

const rootReducer = combineReducers({
  stocksList: stocksReducer,
  stocksDetails: stocksDetailsReducer,
});

export default rootReducer;
