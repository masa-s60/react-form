import { useContext } from 'react';
import { stepContext } from '../templates/form';
import { typeStepNumberObject } from '../../types/types';

export const ChangeButtonTransition = () => {
  const { stepNumber } = useContext(stepContext) as Required<typeStepNumberObject>;
  const SURVEY_STEP = {
    FORM_STEP1: 1,
    FORM_STEP2: 2,
    FORM_STEP3: 3,
    FORM_STEP4: 4,
  }
  let back;
  let next;
  if(stepNumber === SURVEY_STEP.FORM_STEP1) {
    back = 1;
    next = 2;
  } else if(stepNumber === SURVEY_STEP.FORM_STEP2) {
    back = 1;
    next = 3;
  } else if(stepNumber === SURVEY_STEP.FORM_STEP3) {
    back = 2;
    next = 4;
  } else if(stepNumber === SURVEY_STEP.FORM_STEP4) {
    back = 3;
    next = 4;
  }
  return [back, next];
}