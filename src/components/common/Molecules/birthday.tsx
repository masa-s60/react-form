import QuestionItem from '../atoms/question-item';
import SelectBirthday from './select-birthday';
const Birthday = () => {
  return(
    <div className="block">
      <QuestionItem title='生年月日'/>
      <SelectBirthday/>
    </div>
  );
}

export default Birthday;