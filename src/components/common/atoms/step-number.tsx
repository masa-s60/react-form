import { FC } from "react";
const StepNumber:FC<{stepNum: string}> = (props) => {
  return(
    <div className="p-question">
      <p className="p-step">STEP{props.stepNum}</p>
    </div>
  );
}

export default StepNumber;