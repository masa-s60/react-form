import { FC, useContext } from 'react';
import { stepContext } from '../../templates/form';
import { typeStepNumberObject } from '../../../types/types';
const Button:FC<{buttonValue: string, transition: number}> = (props) => {
  const {setStepNumber} = useContext(stepContext) as Required<typeStepNumberObject>;

  return(
    <div className="column">
      <button 
        className="button is-success" 
        type="button" 
        onClick={ () => setStepNumber(props.transition)}>
          {props.buttonValue}<b>　&gt;</b>
      </button>
    </div>
  )
}

export default Button;