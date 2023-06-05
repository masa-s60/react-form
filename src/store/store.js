import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './form-data-slice';

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});