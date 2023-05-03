import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'formData',
  initialState: {
    sex: '男性',
    birthdayYear: '1950(昭和25)',
    birthdayMonth: 1,
    birthdayDay: 1,
    lifeInsurance: '',
    hospitalization: '',
    operated: '',
    consultation: '',
},
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;