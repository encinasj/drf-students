import React,{useState,useRef} from 'react'

const LearnUseRef = () => {
    const [name, setName] = useState('')
    const refElement = useRef('')
    const previousRef = useRef('')

    const clearText =()=>{
        setName("")
        refElement.current.focus()
    }
    const handleInput = (e) =>{
        previousRef.current = name
        setName(e.target.value)
    }

  return (
    <>
        <h1>--------------------------------</h1>
        <h1>Learn useRef</h1>
         <input type="text" value={name} onChange={handleInput} placeholder='just text some idea..' />
         <button onClick={clearText}>Clear</button>
         <br />
         <p>Previous name: {previousRef.current}</p>
    </>
  )
}

export default LearnUseRef