import React from 'react'

const Buttons = ({ emitEventFunctions }) => {
    return (
      <div>
      <button onClick={emitEventFunctions.handleButton1}>Play State 1</button>
      <button onClick={emitEventFunctions.handleButton2}>Play State 2</button>
      <button onClick={emitEventFunctions.handleButton3}>Play State 3</button>
      <button onClick={emitEventFunctions.handleButton4}>Play State 4</button>
      <button onClick={emitEventFunctions.handleButton5}>Play State 5</button>
      <button onClick={emitEventFunctions.handleButton6}>Play State 6</button>
      </div>
    );
  };
  
  export default Buttons;