import { FC } from "react";
import { useDispatch } from "react-redux";
import { changeStep } from '../../../store/step-slice';
const Button:FC<{buttonValue: string}> = (props) => {
  const dispatch = useDispatch();
  return(
    <div>
      <button type="button" onClick={ () => dispatch(changeStep(props.buttonValue))}>{props.buttonValue}</button>
    </div>
  )
}

export default Button;