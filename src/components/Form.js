import React, { useState } from 'react'

const Form = () => {
  // const [name,setName]=useState('');
  // const [email,setEmail]=useState('');
  let [typepassword,setTypepassword]=useState('text');
  const [password,setPassword]=useState('');
  // const handlesubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(`name is ${name}`);
  //   console.log(`email is ${email}`);
  //   console.log(`password is ${password}`);
    
  // }
  const handleclick=(e)=>{
    e.preventDefault();
    if(typepassword==='password'){
      setTypepassword('text');
    }
    else{
      setTypepassword('password');
    }
  }
  return (
    <>
    <form >
    <label htmlFor='password'>password</label>
    <input id='password' type={typepassword}></input>
    <button onClick={handleclick}>Show/Hide</button>
    </form>
    
    </>
  )
  
}


export default Form