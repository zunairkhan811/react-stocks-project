import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootreducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
