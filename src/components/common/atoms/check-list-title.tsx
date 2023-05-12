import { FC } from "react";
const ChecklistTitle:FC<{checklist: string, icon: string}> = (props) => {
  return(
    <div className="column is-12 has-background-primary-light has-text-centered" style={{borderRadius: '5px'}}>
      <span className="icon">
        <i className={props.icon}></i>
      </span>
      <span className="has-text-weight-bold">{props.checklist}</span>
    </div>
  );
} 

export default ChecklistTitle;