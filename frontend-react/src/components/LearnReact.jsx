import React from 'react'
//variable global
//es una forma de crear un elemento o etiqueta html en jsx 
const h2Element = React.createElement("h2",null,"Learn JSX")

const LearnReact = () => {

  //variable local
  let stock = 'Apple'

  return (
    <>
    
      <h2>jsx</h2>
      {/*suma*/}
      <h2>Proce: {10 + 19}</h2>
      {/*forma de declarar una clase */}
      <h2 className='gb-success'>Class</h2>
      {/*forma de declarar una clase con una variable */}
      <h2 className={stock}>Dynamic Class</h2>
      <h2></h2>
    </>
  )
}

export default LearnReact