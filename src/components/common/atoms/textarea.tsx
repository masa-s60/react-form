import { useState } from 'react';

const TextArea = () => {
  const [text, setText] = useState<string>('');

  return(
    <div style={{textAlign: "center"}}>
      <textarea style={{ width: "600px", height: "400px"}} onChange={ e => setText(e.target.value)} className="p-question-detailed__input-text"></textarea> 
    </div>
  )
}

export default TextArea;