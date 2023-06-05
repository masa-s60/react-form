import { FC, useContext } from 'react';
import { useSelector } from 'react-redux';
import { stepContext } from '../../templates/form';
import { checkFormState } from '../../container/transition-handle';
import { typeStepNumberObject, typeFormData, rootFormData, typeTransitionHandlingItem } from '../../../types/types';

const Button:FC<{buttonValue: string, transition: number}> = (props) => {
  const transitionNum = props.transition;
  const buttonValue = props.buttonValue;
  const { setStepNumber } = useContext(stepContext) as Required<typeStepNumberObject>;
  const { stepNumber } = useContext(stepContext) as Required<typeStepNumberObject>;
  const formData = useSelector<rootFormData>((state) => state.formData) as typeFormData;
  const transitionHandlingItem: typeTransitionHandlingItem = {
    buttonValue,
    transitionNum,
    stepNumber, 
    setStepNumber,
    formData,
  }

  return(
    <div className="column">
      <button 
        className="button is-success" 
        type="button" 
        onClick={() => checkFormState(transitionHandlingItem)}>
          {props.buttonValue}<b>　&gt;</b>
      </button>
    </div>
  )
}

export default Button;