import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"

function App() {

  let price = 300
  return (
    <>
        <h1>Learn Events</h1>
      {/*
        <h1>Learn ReactJS</h1>
        <HelloWorld/>
        <LearnReact/>
        <LearnProps stock="Apple" price={price}/>
      */}
      <LearnEvent/>
    </>
  )
}
export default App
