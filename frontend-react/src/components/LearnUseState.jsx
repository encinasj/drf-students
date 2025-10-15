import {useState} from 'react'

const LearnUseState = () => {
  // Declare a state variable named 'count' with an initial value of 0.
  // 'count' holds the current state, and 'setCount' is the function to update it.
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // Update the 'count' state by calling 'setCount'.
    // This will trigger a re-render of the Counter component.
    setCount(count + 1);
  };
  const RestartCount = () => {
    // Update the 'count' state by calling 'setCount'.
    // This will trigger a re-render of the Counter component.
    setCount(count==0);
  };
    
  return (
    <>
      <p>Count: {count||0}</p>
      <button onClick={incrementCount}>Increment</button>
      <br />
      <button onClick={RestartCount}>Restart</button>
    </>
  )
}

export default LearnUseState