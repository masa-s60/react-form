import { FC } from "react";
import StepNumber from '../atoms/step-number';
import ChecklistTitle from '../atoms/check-list-title';
const FormHead:FC<{stepNum: string, checklist: string}> = (props) => {
  return(
    <div className="p-question">
      <StepNumber stepNum={props.stepNum}/>
      <ChecklistTitle checklist={props.checklist}/>
    </div>
  );
}

export default FormHead;