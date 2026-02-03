import React, { useState } from 'react'

const LearnConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [status, setStatus] = useState(false)
  return (
    <>
      <h1>Learn Conditional Rendering</h1>

      {isLoggedIn ?(
          <h3>Welcome User!</h3>
      ) : (
          <h3>Please Log in </h3>
      )}

      {status && (
          <h3>show data</h3>
        )}

      <button onClick={() => {setStatus(true); setIsLoggedIn(true);}}>Login</button>
      <button onClick={() => (setIsLoggedIn(false),setStatus(false))}>Logout</button>
    </>
  )
}

export default LearnConditionalRendering