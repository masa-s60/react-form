import FormHead from '../common/Molecules/form-head';
import InputConfirm from '../common/Molecules/input-confirm';
import { borderStyle } from '../../styles/form-style';

const FormStep4 = () => {

  return(
    <div className='block column is-8 is-offset-2 transition-animation' style={borderStyle}>
      <FormHead
        stepNum='4' 
        checklist='以下の内容をご確認ください'
        icon='fas fa-file-alt'
      />
      <InputConfirm/>
    </div>
  );
}

export default FormStep4;