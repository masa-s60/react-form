import FormHead from '../common/Molecules/form-head';
import TextArea from '../common/atoms/textarea';
import Question from '../common/Molecules/question';
const FormStep3 = () => {
  return(
    <div className="formStep1">
        <form id="app" className="p-form" action="">
          <FormHead stepNum='3' checklist='ご相談内容をご記入ください'/>
          <Question title='ご相談内容'/>
          <TextArea/>
        </form>
    </div>
  );
}

export default FormStep3;