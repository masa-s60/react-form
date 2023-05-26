import { useContext } from 'react';
import { stepContext } from '../templates/form';
import { typeStepNumberObject } from '../../types/types';

export const ChangeButtonTransition = () => {
  const { stepNumber } = useContext(stepContext) as Required<typeStepNumberObject>;

  let back;
  let next;
  if(stepNumber === 1) {
    back = 1;
    next = 2;
  } else if(stepNumber === 2) {
    back = 1;
    next = 3;
  } else if(stepNumber === 3) {
    back = 2;
    next = 4;
  } else if(stepNumber === 4) {
    back = 3;
    next = 5;
  }
  return [back, next];
}