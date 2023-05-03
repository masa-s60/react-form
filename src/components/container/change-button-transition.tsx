import { FC } from "react";
import { useState } from 'react';

export const ChangeButtonTransition = (formStepNum: string) => {
  const [back, setBack] = useState<string>('/');
  const [next, setNext] = useState<string>('/formStep2/');

  if(formStepNum === '2') {
    setNext('/formStep3/');
  }
  console.log(back);
  console.log(next);
}