
const LearnLiftingStateUp = (props) => {

    const handleClick = () =>{
        let stock ='Apple'
        props.myClick(stock)
    }

  return (
    <>
        <h1>Lifting State Up</h1>
        <button onClick={handleClick}>Click here</button>
    </>
  )
}

export default LearnLiftingStateUp