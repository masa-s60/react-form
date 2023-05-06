import { Dispatch, SetStateAction } from "react";

export type sexStatus = '男性' | '女性';

export type typeFormData = {
  sex: string,
  birthdayYear: string,
  birthdayMonth: string,
  birthdayDay: string,
  lifeInsurance: string,
  hospitalization: string,
  operated: string,
  consultation: string,
}
export type rootFormData = {
  formData: typeFormData
}

export type typeStepNumber = {
  stepNumber: number
}
export type rootStepNumber = {
  formStep: typeStepNumber
}

// type taskListArray<T> = Record<'comment' | 'status', T | ('作業中' | '完了')>;