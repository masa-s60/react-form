import { FC } from "react";
const QuestionItem:FC<{title: string}> = (props) => {
  return(
    <div className="p-question">
      <p>-{props.title}-</p>
    </div>
  );
}

export default QuestionItem;