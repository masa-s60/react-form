import { FC } from "react";
import icon from '../../../img/id-card.svg'
const ChecklistTitle:FC<{checklist: string}> = (props) => {
  return(
    <div className="column is-12 has-background-primary-light has-text-centered" style={{borderRadius: '5px'}}>
        <img src={icon} style={{width: '16px'}} alt="image"/>
        <span className="has-text-weight-bold">{props.checklist}</span>
    </div>
  );
} 

export default ChecklistTitle;