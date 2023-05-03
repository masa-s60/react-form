import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './form-data-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});