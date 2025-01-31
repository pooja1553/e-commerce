import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer className="footer">
        <ul className='ft1'>
        <li className='ft-li'><Link className='ft-link' to='/about'>About Us</Link>
          <p> We are dedicated to offering high-quality products, ensuring a enjoyable shopping experience</p>
        </li>
            <li><Link className='ft-link' to='#'>Quick Links</Link>
              <ul className='ft-ul'>
                <li><Link to='men' className='ft-link'>Men</Link></li>
                <li><Link to='women' className='ft-link'>Women</Link></li>
                <li><Link to='kids' className='ft-link'>Kids</Link></li>
              </ul>
            </li>
            <li><Link className='ft-link' to='#'>Contact Us</Link>
              <ul className='ft-ul'>
                <li><Link to="#" className='ft-link'>Instagram</Link></li>
                <li><Link to="#" className='ft-link'>facebook</Link></li>
                <li><Link to="#" className='ft-link'>Linked in</Link></li>
              </ul>
            </li>
        </ul>
    </footer>
    </>
  )
}

export default Footer

