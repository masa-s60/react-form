import { useSelector } from 'react-redux';
import FormHead from '../common/Molecules/form-head';
import Question from '../common/Molecules/question';
import { setLifeInsurance, setHospitalization, setOperated } from '../../store/form-data-slice';
import { rootFormData } from '../../types/types';
import { borderStyle } from '../../styles/form-style';

const FormStep2 = () => {
  const lifeInsuranceState = useSelector<rootFormData>((state) => state.formData.lifeInsurance);
  const hospitalizationState = useSelector<rootFormData>((state) => state.formData.hospitalization);
  const operatedState = useSelector<rootFormData>((state) => state.formData.operated);

  return(
    <div className="block column is-8 is-offset-2 transition-animation" style={borderStyle}>
      <FormHead 
        stepNum='2' 
        checklist='以下にお答えください'
        icon='fas fa-chalkboard-teacher'
      />
      <Question 
        title='現在、生命保険に加入されていますか？' 
        radioButtonItems={['はい', 'いいえ']} 
        reducer={setLifeInsurance} 
        state={lifeInsuranceState as string}
        labelID={['insured', 'notInsured']}
      />
      {(() => {
        if(lifeInsuranceState) {
          return <Question 
            title='現在入院中ですか。また、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？' 
            radioButtonItems={['はい', 'いいえ']}
            reducer={setHospitalization}
            state={hospitalizationState as string}
            labelID={['hospitalized', 'notHospitalized']}
          />
        }
      })()}
      {(() => {
        if(hospitalizationState) {
          return <Question 
            title='過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？' 
            radioButtonItems={['はい', 'いいえ']}
            reducer={setOperated}
            state={operatedState as string}
            labelID={['operated', 'notOperated']}
          />
        }
      })()}
    </div>
  );
}

export default FormStep2;