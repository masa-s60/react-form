import { useContext } from 'react';
import Button from '../atoms/button';
import { stepContext } from '../../templates/form';
import { ChangeButtonTransition } from '../../container/change-button-transition';
import { typeStepNumberObject } from '../../../types/types';
const TransitionButton = () => {
  const { stepNumber } = useContext(stepContext) as Required<typeStepNumberObject>;
  const [back, next] = ChangeButtonTransition();
  
  return(
    <div className="columns">
      {(() => {
        if(stepNumber !== 1) {
          return <Button buttonValue='前へ戻る' transition={back as number}/>
        }
      })()}
      <Button buttonValue='次へ進む' transition={next as number}/>
    </div>
  )
}

export default TransitionButton;