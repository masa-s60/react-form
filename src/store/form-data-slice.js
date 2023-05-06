import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    sex: '',
    birthdayYear: '1950(昭和25)',
    birthdayMonth: '1',
    birthdayDay: '1',
    lifeInsurance: '',
    hospitalization: '',
    operated: '',
    consultation: '',
  },
  reducers: {
    setSex: (formData, action) => {
      formData.sex = action.payload;
      console.log(formData.sex);
    },
    setBirthdayYear: (formData, action) => {
      formData.birthdayYear = action.payload;
      console.log(formData.birthdayYear);
    },
    setBirthdayMonth: (formData, action) => {
      formData.birthdayMonth = action.payload;
    },
    setBirthdayDay: (formData, action) => {
      formData.birthdayDay = action.payload;
    },
    setLifeInsurance: (formData, action) => {
      formData.lifeInsurance = action.payload;
    },
    setHospitalization: (formData, action) => {
      formData.hospitalization = action.payload;
    },
    setOperated: (formData, action) => {
      formData.operated = action.payload;
    },
    setConsultation: (formData, action) => {
      formData.consultation = action.payload;
      console.log(formData.consultation);
    },
  },
});


export const { 
  setSex, 
  setBirthdayYear, 
  setBirthdayMonth, 
  setBirthdayDay,
  setLifeInsurance,
  setHospitalization,
  setOperated,
  setConsultation } = formDataSlice.actions;

export default formDataSlice.reducer;