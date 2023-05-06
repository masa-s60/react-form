import { useDispatch, useSelector } from 'react-redux';
import { setBirthdayDay } from '../../../store/form-data-slice';
import { useCreateDaysList } from '../../container/create-date';
import { rootFormData } from "../../../types/types";

const SelectDay = () => {
  const dispatch = useDispatch();
  const selectDay = useSelector<rootFormData>((state) => state.formData.birthdayDay);
  const daysListObject = useCreateDaysList();
  return(
    <div>
      <select value={selectDay as string} onChange={ e => dispatch(setBirthdayDay(e.target.value))}>
        {daysListObject.map( (item, index) => {
          return(
            <option key={index}>
              {item}日
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectDay;