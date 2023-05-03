import { FC } from "react";
import SelectButtons from '../atoms/select-button';
import QuestionItem from '../atoms/question-item';
const Question:FC<{title: string, radioButtonItems?: string[]}> = (props) => {
  return(
    <div className="p-question-detailed">
      <QuestionItem title={props.title}/>
      {(() => {
        if(props.radioButtonItems) {
          return <SelectButtons radioButtonItems={props.radioButtonItems}/>
        }
      })()}
    </div>
  );
}

export default Question;