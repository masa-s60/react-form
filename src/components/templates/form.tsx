import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormStep1 from '../features/form-step1';
import FormStep2 from '../features/form-step2';
import FormStep3 from '../features/form-step3';
import TransitionButtons from '../common/Molecules/transitionButtons';
const Form = () => {
  const [formStepNum, setFormStepNum] = useState<string>('1');

  return(
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<FormStep1/>} />
        <Route path={'/formStep2/'} element={<FormStep2/>} />
        <Route path={'/formStep3/'} element={<FormStep3/>} />
      </Routes>
      <TransitionButtons formStepNum={formStepNum}/>
    </BrowserRouter>
  );
}

export default Form;