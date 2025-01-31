import React, { useState } from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({...user,[name]:value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {email,password} = user;
    try{
      const result = await fetch('/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      })
      if(result.status===200){
        navigate('/');
        window.alert("Login Successfully");
        window.location.reload();
      }
      else{
        window.alert("Invalid Credentials");
      }
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <>
     <div className='login cont'>
    <div className="contact1">
    <form className="contact2" method="POST" onSubmit={handleSubmit}>
         <label htmlFor="email">Email</label>
        <input type="email" required name='email' placeholder='Enter your email address' onChange={handleChange}/>
        <label htmlFor="Password">Password</label>
        <input type="password" required name='password' placeholder='Enter your password' onChange={handleChange}/>
        <button type='submit'>Login</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Login