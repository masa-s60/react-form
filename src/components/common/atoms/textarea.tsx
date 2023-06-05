import { useDispatch, useSelector } from 'react-redux';
import { rootFormData } from '../../../types/types';
import { setConsultation } from '../../../store/form-data-slice';
const TextArea = () => {
  const dispatch = useDispatch();
  const consultation = useSelector<rootFormData>((state) => state.formData.consultation);

  return(
    <div style={{textAlign: "center"}}>
      <textarea 
        className='textarea'
        style={{ width: "600px", height: "400px"}} 
        value={consultation as string}
        onChange={ e => dispatch(setConsultation(e.target.value))}>
      </textarea> 
    </div>
  )
}

export default TextArea;