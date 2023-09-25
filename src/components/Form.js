import React, { useState } from 'react'

const Form = () => {
  // const [name,setName]=useState('');
  // const [email,setEmail]=useState('');
  let [typepassword,setTypepassword]=useState('text');
  const [password,setPassword]=useState('');
  let [strength,setStrength]=useState('');
  const [color,setColor]=useState('');
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
    const passRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$%^&*!])[A-Za-z\d@$%^&*!]+$/;
    if(passRegex.test(newpassword)){
      if(newpassword.length>5){
        console.log(`${newpassword} strong`);
        setStrength('strong');
        setColor('green');
      }
      else if(newpassword.length>=1){
        console.log(`${newpassword} weak`);
        setStrength('weak');
        setColor('red');
      }
      else{
        setStrength('');
        setColor('');
      }
    }
    else{
      setStrength('Invalid');
      setColor('');
    }
  }
  const handlereset=()=>{
    
  }
  return (
    <>
    <form >
    <label htmlFor='password'>password</label>
    <input id='password' type={typepassword} onChange={handlePasswordChange}></input>
    <button onClick={handleclick}>Show/Hide</button>
    <button onClick={handlereset}>Reset</button>
    </form>
    <br/>
    <br/>
    <div>
      password strength <span style={{color:color}} >{strength}</span>
    </div>
    </>
  )
  
}


export default Form