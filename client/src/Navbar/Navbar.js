import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  const [bar,setBar] = useState(false)
  const handleToggleBar = () => {
    setBar(!bar);
  }
  return (
    <>
    <header>
      <nav>
        <div className="nav1">
          <h1>Shopping</h1>
          <div className="nav3">
            <ul className='nav-ul'>
              <li><Link to='/' className='link-li'>Home</Link></li>
              <li><Link to='/men' className='link-li'>Men</Link></li>
              <li><Link to='/women' className='link-li'>Women</Link></li>
              <li><Link to='/kids' className='link-li'>Kids</Link></li>
              <li><Link to='/login' className='link-li'>Login</Link></li>
              {/* <li><Link to='/signup' className='link-li'>SignUp</Link></li> */}
              <li><Link to='/contact' className='link-li'>Contact Us</Link></li>
              {/* <li><Link to='/cart' className='link-li'>Cart</Link></li> */}
            </ul>
          </div>
          </div>
          <div className='nav-h'><h1>Shopping</h1><span onClick={handleToggleBar}><FaBars/></span> </div>
          <div className="nav4">
            <ul className={bar?'nav-ul-show':'nav-ul-hide'}>
            <li><Link to='/' className='link-li'>Home</Link></li>
              <li><Link to='/men' className='link-li'>Men</Link></li>
              <li><Link to='/women' className='link-li'>Women</Link></li>
              <li><Link to='/kids' className='link-li'>Kids</Link></li>
              <li><Link to='/login' className='link-li'>Login</Link></li>
              {/* <li><Link to='/signup' className='link-li'>SignUp</Link></li> */}
              <li><Link to='/contact' className='link-li'>Contact Us</Link></li>
              {/* <li><Link to='/cart' className='link-li'>Cart</Link></li> */}
            </ul>
          </div>
       
      </nav>
    </header>
    </>
  )
}

export default Navbar