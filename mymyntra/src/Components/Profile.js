import axios from 'axios';
import React, { useState } from 'react'

function Profile() {
  const[sent,setSent]=useState();
  const[mail,setMail]=useState();
  const[password, setPassword]=useState();
  const handleData =async()=>{
    setSent(true)
    try{
      await axios.post("http://localhost:5000/login",
      { 
        mail,
        password

      })
    }catch(error){
      console.log(Object)   
    }
  }

  return (
    <div>
      {!sent?(
      <form onSubmit={handleData}>
      <h2 id='heading'>LOGIN</h2>
     <div className='box'>
        <input type='email' name='email' placeholder='Email' className='inptEmail' onChange={(e)=>setMail(e.target.value)}/>
        <input type='password' name='password' placeholder='password' className='password' onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit" id='subt'>LOGIN</button>
   </div>
   </form>
   ):(
    console.log('Hello')
   )}
   </div>
  )
}
export default Profile