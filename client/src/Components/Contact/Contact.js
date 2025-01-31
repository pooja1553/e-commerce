import React, {useState} from 'react';
import './Contact.css';

function Contact() {
   const[sign,setSign]=useState({
      name:"",
      email:"",
      message:""
    })
    const handleChange = (event) => {
      let name = event.target.name
      let value = event.target.value;
      setSign({...sign,[name]:value});
    }
    const handleSubmit = async(event) => {
      event.preventDefault();
      const{name,email,message}=sign;
      try{
        const result = await fetch('/contact',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,
            email,
            message
          })
        })
        console.log(result.status);
        if(result.status===400 || !result){
          window.alert("Message not sent. Try Again");
        }
        else{
          window.alert("Message sent successfully");
          setSign({
            name:"",
            email:"",
            message:""
          })
        }
      }catch(e){
        console.log(e);
      }
   }
  return (
    <>
    <div className='contact'>
    <div className="contact1">
    <form className="contact2 contact-1"  method='POST' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' required placeholder='Enter your name' value={sign.name} onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" name='email'  required placeholder='Enter your email address' value={sign.email} onChange={handleChange}/>
        <label htmlFor="message">Message</label>
        <textarea name="message" rows='5'  required id="" placeholder='Enter feedback' value={sign.message} onChange={handleChange}></textarea>
        <button type='submit'>Send Message</button>
    </form>
    </div>
    </div>

  </>
  )
}

export default Contact