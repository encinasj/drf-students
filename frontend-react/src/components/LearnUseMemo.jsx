import React, { useState } from 'react'

function LearnUseMemo() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(15000);

    const increaseCount = () =>{
        setCount(count + 1);
    }

    const sumofNumber = () =>{
      let sum = 0;
      for (let i=1; i<=number; i++){
        sum += i;
      }
      return sum
    }
    console.log(`Sum of number from 1 to ${number}`, sumofNumber())
  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}> Increae count </button>
    </>
  )
}

export default LearnUseMemo