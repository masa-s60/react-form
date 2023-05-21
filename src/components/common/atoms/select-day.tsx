import { useDispatch, useSelector } from 'react-redux';
import { setBirthdayDay } from '../../../store/form-data-slice';
import { CreateDaysList } from '../../container/create-date';
import { rootFormData } from '../../../types/types';

const SelectDay = () => {
  const dispatch = useDispatch();
  const setYear = useSelector<rootFormData>((state) => state.formData.birthdayYear);
  const setMonth = useSelector<rootFormData>((state) => state.formData.birthdayMonth);
  const selectDay = useSelector<rootFormData>((state) => state.formData.birthdayDay);
  const daysListObject = CreateDaysList(setYear as string, setMonth as string);

  return(
    <div style={{width: 'auto'}} className='column is-1'>
      <select className='mr-1' value={selectDay as string} onChange={ e => dispatch(setBirthdayDay(e.target.value))}>
        {daysListObject.map( (item, index) => {
          return(
            <option key={index}>
              {item}
            </option>
          )
        })}
      </select>
      <span>日</span>
    </div>
  )
}

export default SelectDay;