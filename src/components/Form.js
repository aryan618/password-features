import React, { useState } from 'react'

const Form = () => {
  // const [name,setName]=useState('');
  // const [email,setEmail]=useState('');
  let [typepassword,setTypepassword]=useState('text');
  const [password,setPassword]=useState('');
  let [strength,setStrength]=useState('');
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
  const handlePasswordChange=(e)=>{
    e.preventDefault();
    const newpassword=e.target.value;
    setPassword(newpassword);
    if(newpassword.length>5){
      console.log(`${newpassword} strong`);
      setStrength('strong');
    }
    else{
      console.log(`${newpassword} weak`);
      setStrength('weak');
    }
  }
  return (
    <>
    <form >
    <label htmlFor='password'>password</label>
    <input id='password' type={typepassword} onChange={handlePasswordChange}></input>
    <button onClick={handleclick}>Show/Hide</button>
    </form>
    <br/>
    <br/>
    <div>
      password strength {strength}
    </div>
    </>
  )
  
}


export default Form