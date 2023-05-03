import { useState } from 'react';
import { useCreateDaysList } from '../../container/create-date';

const SelectDay = () => {
  const [birthdayDay, setBirthdayDay] = useState<string>('1');
  const daysListObject = useCreateDaysList();
  return(
    <div>
      <select onChange={ e => setBirthdayDay(e.target.value)}>
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