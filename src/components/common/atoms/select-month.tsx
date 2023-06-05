import { useDispatch, useSelector } from 'react-redux';
import { setBirthdayMonth } from '../../../store/form-data-slice';
import { CreateMonthsList } from '../../container/create-date';
import { rootFormData } from '../../../types/types';

const SelectMonth = () => {
  const dispatch = useDispatch();
  const selectMonth = useSelector<rootFormData>((state) => state.formData.birthdayMonth);
  const monthsListObject = CreateMonthsList();
  return(
    <div style={{width: 'auto'}} className='column is-1'>
      <select className='mr-1' value={selectMonth as string} onChange={ e => dispatch(setBirthdayMonth(e.target.value))}>
        {monthsListObject.map( (item, index) => {
          return(
            <option key={index}>
              {item}
            </option>
          )
        })}
      </select>
      <span>月</span>
    </div>
  )
}

export default SelectMonth;