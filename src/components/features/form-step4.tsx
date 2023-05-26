// import { FC } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import FormHead from '../common/Molecules/form-head';
import InputConfirm from '../common/Molecules/input-confirm';
const FormStep4 = () => {

  return(
    <div className='block column is-8 is-offset-2 transition-animation' style={{border: 'solid 1.5px #00d890', borderRadius: '5px'}}>
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