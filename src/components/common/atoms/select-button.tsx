import { useState } from 'react';
import { FC } from "react";
const SelectButton:FC<{radioButtonItems: string[]}> = (props) => {
  const [checkedButton, setButton] = useState<string>(props.radioButtonItems[0]);

  return(
    <div>
      {props.radioButtonItems.map( (item) => {
        return(
          <label key={item} htmlFor={item}>
            <input id={item} 
            className="p-radio-button" 
            type="radio" 
            onChange={ e => setButton(e.target.value)}
            value={item} 
            checked={item === checkedButton}/>{item}
          </label>
        )
      })}
    </div>
  );
}

export default SelectButton;