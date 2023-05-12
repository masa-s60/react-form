import { FC } from "react";
import { useDispatch } from "react-redux";
import { changeStep } from '../../../store/step-slice';

const Button:FC<{buttonValue: string}> = (props) => {
  const dispatch = useDispatch();
  return(
    <div className="column">
      <button 
        className="button is-success" 
        type="button" 
        onClick={ () => dispatch(changeStep(props.buttonValue))}>
          {props.buttonValue}<b>　&gt;</b>
      </button>
    </div>
  )
}

export default Button;