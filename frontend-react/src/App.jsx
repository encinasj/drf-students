import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import LearnUseState from "./components/LearnUseState"

function App() {
  //let price = 300
  const getStock = (data) =>{
    console.log(data)
  }

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
      */}
      <LearnUseState myClick={getStock}/>
    </>
  )
}
export default App
