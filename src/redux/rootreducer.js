import { combineReducers } from '@reduxjs/toolkit';
import booklists from './books/myBookSlice';
import myCategorySlice from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: booklists,
  categories: myCategorySlice,
});

export default rootReducer;
