/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/footer.css'; // Import as a global CSS file
import flag from '../assets/United States of America (US).png';
import Frame from '../assets/Frame 136278.png';
import InstaIcon from '../assets/Insta.png';
import LinkedInIcon from '../assets/a.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
        <div className="footer-section contact">
          <h4><span className='contactUS'>CONTACT US </span> <span className='callUs'>CALL US</span></h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4 className='currencyHeading'>CURRENCY</h4>
          <div className="currency">
            <img src={flag} alt="flag of united states" />
            <li>USD</li>
          </div>
          <p className='desc'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr />
      <div className="footer-middle">
        <div className="footer-section">
          <h4>metta muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <img src={InstaIcon} alt="Insta Icon" />
            <img src={LinkedInIcon} alt="LinkedIn Icon" />
          </div>
          <h4>metta muse ACCEPTS</h4>
          <img src={Frame} alt="Payment Cards Icon" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 mettā muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
