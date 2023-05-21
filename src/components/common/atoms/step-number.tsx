import { FC } from 'react';
const StepNumber:FC<{stepNum: string}> = (props) => {
  return(
    <div style={{position: 'absolute', borderRadius: '4px'}} className="column has-background-info has-text-white-ter p-1">
      <p className="is-size-7">STEP{props.stepNum}</p>
    </div>
  );
}

export default StepNumber;