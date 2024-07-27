import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import insta from'../../assets/instagram.png'
import face from '../../assets/facebook.png'
import u from '../../assets/youtube.png'
import './Footer.css'


const Footer = () => {
  return (
    <nav className='footer'>
    
    <div className='logoF'>
      <img src={logo}/>
    </div>
     <ul className='footer-links'>
     <li><Link to='/'><img src={face}/></Link></li>
      <li><Link to='/'><img src={u}/></Link></li>
      <li><Link to='/'><img src={insta}/></Link></li>
      {/* <li><Link to='/faq'>FAQ</Link></li> */}
      <li>All rights reserved</li>
    </ul> 
 
    </nav>
  )
}

export default Footer
