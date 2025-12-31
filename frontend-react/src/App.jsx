import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnUseState from "./components/LearnUseState"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import ChaildA from "./components/ChaildA"
import { createContext ,useState } from "react"
import LearnCustomHooks from "./components/LearnCustomHooks"
//Context API
//Create, provider and consumer 
const StockContext = createContext()
const UserContext = createContext()

function App() {
  let price = 300

  const getStock = (data) =>{
    console.log(data)
  }

  let stock = 'Tesla'
  const [user, setUser] = useState({ name: 'José', isLoggedIn: 'Yes' })

  return (
    <>
      {/*
      <h1>Learn Events</h1>
        <h1>Learn ReactJS</h1>
        <HelloWorld/>
        <LearnReact/>
        <LearnProps stock="Apple" price={price}/>
        <LearnEvent/>
        <LearnLiftingStateUp myClick={getStock}/>
        <LearnUseState/>
        <LearnUseEffect/>
        <LearnUseMemo/>
        <StockContext.Provider value={{ stock, price }}>
          <UserContext.Provider value={{ user, setUser }}>
            <ChaildA />
          </UserContext.Provider>
        </StockContext.Provider>
      */}
    <LearnCustomHooks/>
    </>
  )
}
export default App
export {StockContext,UserContext}