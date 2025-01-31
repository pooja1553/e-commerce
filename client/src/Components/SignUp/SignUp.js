import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const[sign,setSign]=useState({
    name:"",
    email:"",
    mobile:"",
    password:"",
    address:""
  })
  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value;
    setSign({...sign,[name]:value});
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    const{name,email,mobile,password,address}=sign;
    try{
      const result = await fetch('/signup',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          mobile,
          password,
          address
        })
      })
      console.log(result.status);
      if(result.status===400 || !result){
        window.alert("Email alreay exist");
      }
      else{
        navigate('/login')
        window.alert("Registered successfully");
        setSign({
          name:"",
          email:"",
          mobile:"",
          password:"",
          address:""
        })
      }
    }catch(e){
      console.log(e);
    }
 }
  return (
    <>
    <div className='signup '>
    <div className="contact1">
    <form className="contact2" method='POST' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' required placeholder='Enter your name' value={sign.name} onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" name='email'  required placeholder='Enter your email address' value={sign.email} onChange={handleChange}/>
        <label htmlFor="mobile">Mobile</label>
        <input type="text" name='mobile'  required placeholder='Enter your mobile number' value={sign.mobile} onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name='password'  required placeholder='Enter your password' value={sign.password} onChange={handleChange}/>
        <label htmlFor="address">Address</label>
        <input type="text" name='address'  required placeholder='Enter your address' value={sign.address} onChange={handleChange}/>
        <button type='submit'>SignUp</button>
    </form>
    </div>
    </div>
   {/*  <h1>{sign.name}:{sign.email}:{sign.mobile}:{sign.password}:{sign.address}:</h1>*/}
    </>
  )
}

export default SignUp