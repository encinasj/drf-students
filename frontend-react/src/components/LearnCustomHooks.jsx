import React from 'react'
import useCounter from '../hooks/useCounter'

const LearnCustomHooks = () => {
  const {count,increment,decrement,reset} = useCounter()
  return (
    <>
        <h1>Learn Custom Hooks</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <br />
        <button onClick={decrement}>decrement</button>
        <br />
        <button onClick={reset}>reset</button>
    </>
  )
}

export default LearnCustomHooks