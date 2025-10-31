import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnUseState from "./components/LearnUseState"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import ChaildA from "./components/ChaildA"

function App() {
  //let price = 300
  const getStock = (data) =>{
    console.log(data)
  }
  let stock = 'Tesla'
  return (
    <>
        <h1>Learn Events</h1>
      {/*
        <h1>Learn ReactJS</h1>
        <HelloWorld/>
        <LearnReact/>
        <LearnProps stock="Apple" price={price}/>
        <LearnEvent/>
        <LearnLiftingStateUp myClick={getStock}/>
        <LearnUseState/>
        <LearnUseEffect/>
        <LearnUseMemo/>
      */}
      <ChaildA stock={stock} />
    </>
  )
}
export default App
