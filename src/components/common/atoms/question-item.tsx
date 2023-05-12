import { FC } from "react";
const QuestionItem:FC<{title: string}> = (props) => {
  return(
    <div className="mb-3 ">
      <p className="has-text-link">-{props.title}-</p>
    </div>
  );
}

export default QuestionItem;