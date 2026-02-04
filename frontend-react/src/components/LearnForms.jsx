import React, { useState } from 'react'

const LearnForms = () => {

    const [firstName, SetFirstName] = useState('')
    const [lastName, SetLastName] = useState('')


    const handlefirstName = (e) =>{
        SetFirstName(e.target.value)
    }
    const handlelastName = (e) =>{
        SetLastName(e.target.value)
    }
  return (
    <>
    <h1>Learn Form</h1>
    <hr />
    <br />
    <form action="">
        First Name: <input type="text" name='firstName' onChange={handlefirstName} defaultValue={"asdasd"} />
        <br /><br />
        Last Name: <input type="text" name='lastName' onChange={handlelastName} defaultValue={"asdasd"}/>
    </form>

    </>
  )
}

export default LearnForms