import { useDispatch, useSelector } from 'react-redux';
import { setBirthdayYear } from '../../../store/form-data-slice';
import { useCreateYearsList } from '../../container/create-date';
import { rootFormData } from "../../../types/types";
const SelectYear = () => {
  const dispatch = useDispatch();
  const selectYear = useSelector<rootFormData>((state) => state.formData.birthdayYear);
  const yearsListObject = useCreateYearsList();
  return(
    <div>
      <select value={selectYear as string} onChange={ e => dispatch(setBirthdayYear(e.target.value))}>
        {yearsListObject.yearsList.map( (item, index) => {
          return(
            <option key={index}>
              {item}年({yearsListObject.ErasList[index]})
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectYear;