import React, { useState } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { signup } from '../../Redux/Actions/Actions'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [phoneno,setPhoneNo] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = {
        id:Math.floor(Math.random()*100),
        fname:fname,
        lname:lname,
        email:email,
        phoneno:phoneno
    }
    
    function handleSubmit(){
        if(fname===''||lname===''||email===''||phoneno===''){
            alert('Pleas Fill All the Fields')
        }
        dispatch(signup(userData))
        navigate('/listing')
    }
    return (
        <>
        <div className='heading'>
            <h1>Registration</h1>
            </div>
            <div className='form'>
                <input type='text' placeholder='First Name' onChange={(e)=>setFname(e.target.value)} value={fname}/> 
                <input type='text' placeholder='Last Name' onChange={(e)=>setLname(e.target.value)} value={lname}/> 
                <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/> 
                <input type='number' placeholder='Phone No' onChange={(e)=>setPhoneNo(e.target.value)} value={phoneno}/> 
                <button className='btn' onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Registration