import { useState, createContext } from 'react';
import FormStep1 from '../features/form-step1';
import FormStep2 from '../features/form-step2';
import FormStep3 from '../features/form-step3';
import TransitionButtons from '../common/Molecules/transitionButtons';
import { typeStepNumberObject } from '../../types/types';
export const stepContext = createContext<Partial<typeStepNumberObject>>({});

const Form = () => {
  const [stepNumber, setStepNumber] = useState(1);

  const stepNumberObject: typeStepNumberObject = {
    stepNumber,
    setStepNumber
  }
  
  return(
    <div>
      {( () => {
        if(stepNumber === 1) {
          return(
            <FormStep1/>
          )
        } else if(stepNumber === 2) {
          return(
            <FormStep2/>
          )
        } else {
          return(
            <FormStep3/>
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