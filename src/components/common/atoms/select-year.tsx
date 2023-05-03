import { useState } from 'react';
import { useCreateYearsList } from '../../container/create-date';

const SelectYear = () => {
  const [birthdayYear, setBirthdayYear] = useState<string>('1950(昭和25)');
  const yearsListObject = useCreateYearsList();
  return(
    <div>
      <select onChange={ e => setBirthdayYear(e.target.value)}>
        {yearsListObject.yearsList.map( (item, index) => {
          return(
            <option key={index}>
              {item}年　{yearsListObject.ErasList[index]}　
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectYear;