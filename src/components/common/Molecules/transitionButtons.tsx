import { Link } from "react-router-dom";
import { FC } from "react";
import Button from '../atoms/button';
const TransitionButton:FC<{formStepNum: string}> = (props) => {
  return(
    <div style={{display: "flex", justifyContent: "center", marginTop: "3vw"}}>
      {(() => {
        if(props.formStepNum !== '1') {
          return <Link to={'/'}><Button buttonValue='前へ戻る'/></Link>;
        }
      })()}
      <Link to={'/formStep2/'}>
        <Button buttonValue='次へ進む'/>
      </Link>
    </div>
  )
}

export default TransitionButton;