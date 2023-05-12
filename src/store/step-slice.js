import { createSlice } from '@reduxjs/toolkit';

export const stepSlice = createSlice({
  name: 'stepNumber',
  initialState: {
    stepNumber: 1,
  },
  reducers: {
    changeStep: (step, action) => {
      if(action.payload === '次へ進む') {
        step.stepNumber = step.stepNumber + 1;
      } else {
        step.stepNumber = step.stepNumber - 1;
      }
      // console.log(step.stepNumber);
    },
  }
});

export const { changeStep } = stepSlice.actions;
export default stepSlice.reducer;