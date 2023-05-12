import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import FormStep1 from '../features/form-step1';
import FormStep2 from '../features/form-step2';
import FormStep3 from '../features/form-step3';
import TransitionButtons from '../common/Molecules/transitionButtons';
import { rootStepNumber } from "../../types/types";
const Form = () => {
  const stepNum = useSelector<rootStepNumber>((state) => state.formStep.stepNumber);
  console.log(typeof stepNum, stepNum);
  return(
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<FormStep1/>} />
        <Route path={'/formStep2/'} element={<FormStep2/>} />
        <Route path={'/formStep3/'} element={<FormStep3/>} />
      </Routes>
      <TransitionButtons/>
    </BrowserRouter>
  );
}

export default Form;