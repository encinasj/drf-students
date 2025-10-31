import {useState, useEffect} from 'react'

const LearnUseEffect = () => {

    const [count, setCount] = useState(0);

  useEffect(() => {
    // This function runs after every render where 'count' has changed.
    document.title = `You clicked ${count} times`;

    // Optional: Return a cleanup function.
    // This runs before the effect re-runs or when the component unmounts.
    return () => {
      // For example, if you had a subscription, you'd unsubscribe here.
      // console.log("Cleanup function ran");
    };
  }, [count]); // Dependency array: the effect re-runs if 'count' changes.

  return (
    <div>
        <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default LearnUseEffect