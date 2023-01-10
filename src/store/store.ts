import { configureStore, createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import mealPlansReducer from './mealPlans.slice';

// react redux store
export default configureStore({
  reducer: {
    mealPlans: mealPlansReducer
  },
  // redux thunk middleware
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk]
});