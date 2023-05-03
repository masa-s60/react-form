import { useState } from 'react';
import { useCreateMonthsList } from '../../container/create-date';

const SelectMonth = () => {
  const [birthdayMonth, setBirthdayMonth] = useState<string>('1');
  const monthsListObject = useCreateMonthsList();
  return(
    <div>
      <select onChange={ e => setBirthdayMonth(e.target.value)}>
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