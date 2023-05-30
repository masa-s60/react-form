import { useSelector } from 'react-redux';
import FormHead from '../common/Molecules/form-head';
import Question from '../common/Molecules/question';
import Birthday from '../common/Molecules/birthday';
import { setSex } from '../../store/form-data-slice';
import { rootFormData } from '../../types/types';
import { borderStyle } from '../../styles/form-style';

const FormStep1 = () => {
  const sexState = useSelector<rootFormData>((state) => state.formData.sex);

  return(
    <div className="block column is-8 is-offset-2 transition-animation" style={borderStyle}>
      <FormHead 
        stepNum='1' 
        checklist='お客様の情報を入力してください' 
        icon='fas fa-id-card'
      />
      <Question 
        title='性別' 
        radioButtonItems={['男性', '女性']} 
        reducer={setSex} 
        state={sexState as string} 
        labelID={['male', 'female']}
      />
      <Birthday/>
    </div>
  );
}

export default FormStep1;