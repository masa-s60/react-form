import { useState, createContext } from 'react';
import FormStep1 from '../features/form-step1';
import FormStep2 from '../features/form-step2';
import FormStep3 from '../features/form-step3';
import FormStep4 from '../features/form-step4';
import TransitionButtons from '../common/Molecules/transition-buttons';
import { typeStepNumberObject } from '../../types/types';
export const stepContext = createContext<Partial<typeStepNumberObject>>({});

const Form = () => {
  const [stepNumber, setStepNumber] = useState(1);
  const stepNumberObject: typeStepNumberObject = {
    stepNumber,
    setStepNumber
  }
  const SURVEY_STEP = {
    FORM_STEP1: 1,
    FORM_STEP2: 2,
    FORM_STEP3: 3,
  }

  return(
    <div>
      {( () => {
        if(stepNumber === SURVEY_STEP.FORM_STEP1) {
          return(
            <FormStep1/>
          )
        } else if(stepNumber === SURVEY_STEP.FORM_STEP2) {
          return(
            <FormStep2/>
          )
        } else if(stepNumber === SURVEY_STEP.FORM_STEP3) {
          return(
            <FormStep3/>
          )
        } else {
          return(
            <FormStep4/>
          )
        }
      })()}
      <div className='columns is-mobile is-centered' style={{}}>
        <stepContext.Provider value={stepNumberObject}>
          <TransitionButtons/>
        </stepContext.Provider>
      </div>
    </div>
  );
}

export default Form;