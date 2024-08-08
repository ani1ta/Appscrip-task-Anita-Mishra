/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import '../styles/FilterInfo.css';
import ArrowLeft from '../assets/arrow-left.svg';
import RightSymbol from '../assets/rightSymbol.png';

export default function IntroSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('RECOMMENDED');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <section className="intro-section">
      <div className="nav--title">
        <h4 ><span className='heading'>HOME &nbsp;&nbsp; |</span>SHOP </h4>
      </div>
      <h1>DISCOVER OUR PRODUCTS</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      <div className="divider"></div>
      <div className="filter-header">
        <div className="filter-items">
          <h4><span>3425 ITEMS</span></h4>
          <a href="#">
            <img src={ArrowLeft} alt="Arrow left" className="rotate-right" />
            HIDE FILTER
          </a>
        </div>
        <div className="filter-recommended" onClick={toggleDropdown}>
          <h4><span className='filter'>FILTER </span> <span className='vertical-line'> |</span> <span>{selectedOption}</span><img src={ArrowLeft} alt="Arrow " /></h4>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a
                href="#"
                className={selectedOption === 'RECOMMENDED' ? 'active' : ''}
                onClick={() => handleOptionClick('RECOMMENDED')}
              >
                <img src={RightSymbol} alt="Right symbol " />
                RECOMMENDED
              </a>
              <a
                href="#"
                className={selectedOption === 'NEWEST FIRST' ? 'active' : ''}
                onClick={() => handleOptionClick('NEWEST FIRST')}
              >
                NEWEST FIRST
              </a>
              <a
                href="#"
                className={selectedOption === 'POPULAR' ? 'active' : ''}
                onClick={() => handleOptionClick('POPULAR')}
              >
                POPULAR
              </a>
              <a
                href="#"
                className={selectedOption === 'PRICE: HIGH TO LOW' ? 'active' : ''}
                onClick={() => handleOptionClick('PRICE: HIGH TO LOW')}
              >
                PRICE: HIGH TO LOW
              </a>
              <a
                href="#"
                className={selectedOption === 'PRICE: LOW TO HIGH' ? 'active' : ''}
                onClick={() => handleOptionClick('PRICE: LOW TO HIGH')}
              >
                PRICE: LOW TO HIGH
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}
