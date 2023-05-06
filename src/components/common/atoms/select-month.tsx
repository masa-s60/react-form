import { useDispatch, useSelector } from 'react-redux';
import { setBirthdayMonth } from '../../../store/form-data-slice';
import { useCreateMonthsList } from '../../container/create-date';
import { rootFormData } from "../../../types/types";

const SelectMonth = () => {
  const dispatch = useDispatch();
  const selectMonth = useSelector<rootFormData>((state) => state.formData.birthdayMonth);
  const monthsListObject = useCreateMonthsList();
  return(
    <div>
      <select value={selectMonth as string} onChange={ e => dispatch(setBirthdayMonth(e.target.value))}>
        {monthsListObject.map( (item, index) => {
          return(
            <option key={index}>
              {item}月
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectMonth;