import React, { useState } from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Card from './Components/Card/Card'
import './App.css';
import Cart from './Components/Cart/Cart'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import About from './Components/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer'

function App() {
  const [cartItems,setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prevItems)=>[...prevItems,item]);
  }
  const deleteItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
};

  
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart}/>}/>
        <Route path='/men' element={<Card category='men' addToCart={addToCart}/>}/>
        <Route path='/women' element={<Card category='women'addToCart={addToCart}/>}/>
        <Route path='/kids' element={<Card category='kids'addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} deleteItem={deleteItem}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App