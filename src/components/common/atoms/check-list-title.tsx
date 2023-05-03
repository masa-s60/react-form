import { FC } from "react";
const ChecklistTitle:FC<{checklist: string}> = (props) => {
  return(
    <div className="p-question">
      <h2 className="p-question-title">{props.checklist}</h2>
    </div>
  );
}

export default ChecklistTitle;