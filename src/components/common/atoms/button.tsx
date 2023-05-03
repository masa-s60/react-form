import { FC } from "react";
import { ChangeButtonTransition } from '../../container/change-button-transition'
const Button:FC<{buttonValue: string}> = (props) => {
  return(
    <div>
      <button onClick={ () => ChangeButtonTransition(props.buttonValue)}>{props.buttonValue}</button>
    </div>
  )
}

export default Button;