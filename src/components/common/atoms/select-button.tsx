import { FC } from "react";
import { useDispatch } from 'react-redux';

const SelectButton:FC<{radioButtonItems: string[], reducer: Function, state: string, labelID: string[] }> = (props) => {
  const dispatch = useDispatch();
  return(
    <div>
      {props.radioButtonItems.map( (item, index) => {
        return(
          <label key={item} htmlFor={props.labelID[index]}>
            <input id={props.labelID[index]} 
              className="p-radio-button" 
              type="radio" 
              onChange={ e => dispatch(props.reducer(e.target.value as string))}
              value={item} 
              checked={item === props.state}
            />{item}
          </label>
        )
      })}
    </div>
  );
}

export default SelectButton;