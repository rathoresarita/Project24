import React from 'react'

const ChildComponentCallback = ({ onIncrement, onDecrement }) => {
    console.log('Child component re-rendered');

    return (
      <div>
        <button onClick={onIncrement}>Increment from Child</button>
        <button onClick={onDecrement}>Decrement from Child</button>
      </div>
    );
  }


  export default React.memo(ChildComponentCallback);
//export default ChildComponentCallback