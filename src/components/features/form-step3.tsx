import FormHead from '../common/Molecules/form-head';
import TextArea from '../common/atoms/textarea';
import QuestionItem from '../common/atoms/question-item';
import { borderStyle } from '../../styles/form-style';

const FormStep3 = () => {

  return(
    <div className="block column is-8 is-offset-2 transition-animation" style={borderStyle}>
      <FormHead 
        stepNum='3' 
        checklist='ご相談内容をご記入ください'
        icon='fas fa-file-alt'
      />
      <QuestionItem title='ご相談内容'/>
      <TextArea/>
    </div>
  );
}

export default FormStep3;