import {useContext} from 'react'
import { StockContext, UserContext } from '../App'

function ChaildC() {
  const stockData = useContext(StockContext)
  const userData = useContext(UserContext)
  return (
    <>
    {/*
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
    */}
     <h2>User - {userData.user.name}</h2>
     <h2>Is Logeed In? - {userData.user.isLoggedIn}</h2>
     <h2>ChaildC - {stockData.stock}</h2>
    </>
  )
}

export default ChaildC