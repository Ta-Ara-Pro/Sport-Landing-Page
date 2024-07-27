import AnchorLink from 'react-anchor-link-smooth-scroll';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Navbar.css'
import { set } from 'mongoose';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
   
    <ul className='nav-links' >
    <li><AnchorLink href="#home">Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link'  offset={100} href="#about">About</AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#gallery">Gallery</AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#faq">FAQ</AnchorLink></li>
        <li><AnchorLink className='anchor-link' href="#contact">Contact</AnchorLink></li>
    </ul>

    {isMenuOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={toggleMenu}>&times;</span>
            <div className='border'>
            <ul className='nav-modal-links'>
              <li><AnchorLink href="#home">Home</AnchorLink></li>
              <li><AnchorLink className='anchor-link' offset={100} href="#about">About</AnchorLink></li>
              <li><AnchorLink className='anchor-link' href="#gallery">Gallery</AnchorLink></li>
              <li><AnchorLink className='anchor-link' href="#faq">FAQ</AnchorLink></li>
              <li><AnchorLink className='anchor-link' href="#contact">Contact</AnchorLink></li>
            </ul>
            </div>
           
          </div>
        </div>
      )}
  </nav>
  )
}

export default Navbar
