/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/header.css'; // Just import it, no need to assign it to a variable
import Logo from '../assets/Logo.png';
import Search from '../assets/search-normal.svg';
import Heart from '../assets/heart.svg';
import ShoppingCart from '../assets/shopping-bag.svg';
import Profile from '../assets/profile.svg';
import ArrowLeft from '../assets/arrow-left.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <nav>
      <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <img src={Logo} className="navbar--logo" alt="Logo" />
        <h1 className="navbar--title">LOGO</h1>
        <div className="navbar--icon">
          <img src={Search} alt="Search" />
          <img src={Heart} alt="Wishlist" />
          <img src={ShoppingCart} alt="Cart" />
          <img  src={Profile} alt="Profile" className="profile"/>
          <h1 className="lang-translate">ENG</h1>
          <img className="arrow-left" src={ArrowLeft} alt="Arrow" />
        </div>
        
      </nav>
      {menuOpen && (
        <div className="LIST">
          <h4>SHOP</h4>
          <h4>SKILLS</h4>
          <h4>STORIES</h4>
          <h4>ABOUT</h4>
          <h4>CONTACT US</h4>
        </div>
      )}
    </div>
  );
};

export default Header;
