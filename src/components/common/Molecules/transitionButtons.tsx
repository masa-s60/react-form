import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from '../atoms/button';
import { rootStepNumber } from "../../../types/types";
import { ChangeButtonTransition } from '../../container/change-button-transition';

const TransitionButton = () => {
  let [back, next] = ChangeButtonTransition();
  const stepNum = useSelector<rootStepNumber>((state) => state.formStep.stepNumber);
  console.log(back, next);

  return(
    <div className="columns is-mobile is-centered">
      {(() => {
        if(stepNum !== 1) {
          return <Link to={back as string}><Button buttonValue='前へ戻る'/></Link>;
        }
      })()}
      <Link to={next as string}>
        <Button buttonValue='次へ進む'/>
      </Link>
    </div>
  )
}

export default TransitionButton;