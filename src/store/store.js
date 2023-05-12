import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from './form-data-slice';
import stepReducer from './step-slice';

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
    formStep: stepReducer,
  },
});