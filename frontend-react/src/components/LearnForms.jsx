import React, { useState } from 'react'

const LearnForms = () => {

    /** 
    const [firstName, SetFirstName] = useState('')
    const [lastName, SetLastName] = useState('')


     *  const handlefirstName = (e) =>{
            SetFirstName(e.target.value)
        }
        const handlelastName = (e) =>{
            SetLastName(e.target.value)
        }
    **/
    const [formData, SetFormData] = useState({
        firstName:'',
        lastName:''
    })

    const hanldeChange = (e) =>{
        SetFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log('From submite: ', formData);
    }
  return (
    <>
    <h1>Learn Form</h1>
    <hr />
    <br />
    <form action="" onSubmit={handleFormSubmit}>
        First Name: <input type="text" name='firstName' onChange={hanldeChange} defaultValue={formData.firstName} />
        <br /><br />
        Last Name: <input type="text" name='lastName' onChange={hanldeChange} defaultValue={formData.lastName}/>
        <br /> <br />
        <input type="submit" value="Submit" />
    </form>

    </>
  )
}

export default LearnForms