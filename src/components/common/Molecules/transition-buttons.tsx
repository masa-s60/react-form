import { useContext } from 'react';
import Button from '../atoms/button';
import { stepContext } from '../../templates/form';
import { ChangeButtonTransition } from '../../container/change-button-transition';
import { typeStepNumberObject } from '../../../types/types';

const TransitionButton = () => {
  const { stepNumber } = useContext(stepContext) as Required<typeStepNumberObject>;
  const [back, next] = ChangeButtonTransition();
  const SURVEY_STEP = {
    FORM_STEP1: 1,
    FORM_STEP4: 4,
  }

  return(
    <div className="columns">
      {(() => {
        if(stepNumber !== SURVEY_STEP.FORM_STEP1) {
          return <Button buttonValue='前へ戻る' transition={back as number}/>
        }
      })()}
      {(() => {
        if(stepNumber === SURVEY_STEP.FORM_STEP4) {
          return <Button buttonValue='送信' transition={back as number}/>
        } else {
          return <Button buttonValue='次へ進む' transition={next as number}/>
        }
      })()}
    </div>
  )
}

export default TransitionButton;