import React, { useState } from 'react'

const LearnMap = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [status, setStatus] = useState(false)
    const names = ['jose', 'angel', 'fernanda','Gael','Charlotte']

  return (
    <> 
        <h1>LearnMap</h1>

      {isLoggedIn ?(
          <h3>Welcome User!</h3>
      ) : (
          <h3>Please Log in </h3>
      )}

      {status && (
            <h3>Show Data</h3> &&
            <ul>
                {names.map((name, index)=>(
                    <li key={index}>{name}</li>
                ))}
            </ul>
            
        )}

      <button onClick={() => {setStatus(true); setIsLoggedIn(true);}}>Login</button>
      <button onClick={() => (setIsLoggedIn(false),setStatus(false))}>Logout</button>
    
    </>
  )
}

export default LearnMap