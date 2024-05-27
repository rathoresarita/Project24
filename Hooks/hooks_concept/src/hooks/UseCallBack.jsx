import React, { useCallback, useState } from 'react'
import ChildComponentCallback from './ChildComponentCallback'
//in use callback  we can passs the parameter whereas in usememo we cant in useclalback  return memomize fucntion where as  usememo can return memoize fucntion 
const UseCallBack = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);
  
    const increment = useCallback(() => {
      setCount((prevCount) => prevCount + 1);
    }, [count]);
  
    const decrement = useCallback(() => {
      setCount((prevCount) => prevCount - 1);
    }, [count]);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setOtherState(!otherState)}>
          Toggle Other State
        </button>
        <ChildComponentCallback onIncrement={increment} onDecrement={decrement} />
      </div>
    );
  }
export default UseCallBack