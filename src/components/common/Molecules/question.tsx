import { FC } from "react";
import SelectButtons from '../atoms/select-button';
import QuestionItem from '../atoms/question-item';
const Question:FC<{title: string, radioButtonItems?: string[], reducer: Function, state: string, labelID?: string[]}> = (props) => {
  return(
    <div className="p-question-detailed">
      <QuestionItem title={props.title}/>
      {(() => {
        if(props.radioButtonItems && props.labelID) {
          return <SelectButtons 
          radioButtonItems={props.radioButtonItems} 
          reducer={props.reducer} 
          state={props.state} 
          labelID={props.labelID}/>
        }
      })()}
    </div>
  );
}

export default Question;