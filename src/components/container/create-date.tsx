import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { rootFormData } from "../../types/types";
import { setBirthdayDay } from '../../store/form-data-slice';

export const CreateYearsList = () => {
  const yearsList: string[] = [];
  const ErasList: string[] = [];
  const currentDate = new Date();
  const typeEra = /^\D\D\d*/;
  const currentYear = currentDate.getFullYear();
  for(let i = 1950; i <= currentYear; i++) {;
    yearsList.push(String(i));
    let targetYear = new Date(String(i));
    let pastEraData = targetYear.toLocaleString('ja-JP-u-ca-japanese', {era: 'short'});
    let pastEra = pastEraData.match(typeEra);
    if(pastEra !== null) ErasList.push(pastEra[0]);
  }
  return {yearsList, ErasList};
}

export const CreateMonthsList = () => {
  const monthsList: string[] = [];
  for(let i = 1; i <= 12; i++) {
    monthsList.push(String(i));
  }
  return monthsList;
}

export const CreateDaysList = (year: string, month: string) => {
  const dispatch = useDispatch();
  const selectedDay = useSelector<rootFormData>((state) => state.formData.birthdayDay);
  const newDaysList = [];
  const setYear = year.match(/^\d*/);
  const targetDate = new Date(Number(setYear![0]), Number(month), 0);
  const lastDay = targetDate.getDate();
  for(let i = 1; i <= lastDay; i++) {
    newDaysList.push(String(i));
  }
  useEffect(()=>{
    if(Number(selectedDay as string) > lastDay) {
      dispatch(setBirthdayDay('1'));
    }
  });
  return newDaysList;
}