import React from 'react'
import { StockContext, UserContext } from '../App'

function ChaildC() {
  return (
    <>
      <StockContext.Consumer>
        {({ stock, price }) => {
          return (
            <UserContext.Consumer>
              {
                ({ user }) => 
                  {
                    return (
                      <>
                        <h2>User - {user.name}</h2>
                        <h2>isLoggedIn - {user.isLoggedIn}</h2>
                        <h2>Chaild C - {stock}: {price}</h2>
                      </>
                    )
                  }
              }
            </UserContext.Consumer>
          )
        }}
      </StockContext.Consumer>
    </>
  )
}

export default ChaildC