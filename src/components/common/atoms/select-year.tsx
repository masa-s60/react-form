import { useDispatch, useSelector } from 'react-redux';
import { setBirthdayYear } from '../../../store/form-data-slice';
import { CreateYearsList } from '../../container/create-date';
import { rootFormData } from '../../../types/types';
const SelectYear = () => {
  const dispatch = useDispatch();
  const selectYear = useSelector<rootFormData>((state) => state.formData.birthdayYear);
  const yearsListObject = CreateYearsList();
  return(
    <div style={{width: 'auto'}} className='column is-1'>
      <select className='mr-1' value={selectYear as string} onChange={ e => dispatch(setBirthdayYear(e.target.value))}>
        {yearsListObject.yearsList.map( (item, index) => {
          return(
            <option key={index}>
              {item}({yearsListObject.ErasList[index]})
            </option>
          )
        })}
      </select>
      <span>年</span>
    </div>
  )
}

export default SelectYear;