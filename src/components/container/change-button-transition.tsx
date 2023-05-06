import { useSelector } from "react-redux";
import { rootStepNumber } from "../../types/types";

export const ChangeButtonTransition = () => {
  const stepNum = useSelector<rootStepNumber>((state) => state.formStep.stepNumber);
  let back;
  let next;
  if(stepNum === 1) {
    back = '/';
    next = '/formStep2/';
  } else if(stepNum === 2) {
    back = '/';
    next = '/formStep3/';
  } else if(stepNum === 3) {
    back = '/formStep2/';
    next = '/formStep3/';
  }
  return [back, next];
}