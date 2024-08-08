/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/sidebar.css';
import ArrowDown from '../assets/arrow-left.svg';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="filter-category customize">
        <label>
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
        <div className="divider"></div>
      </div>
      <div className="filter-category">
        <div className="filter-header">
          <h4>IDEAL FOR</h4>
          <img src={ArrowDown} alt="Arrow Down" className="rotate1" />
        </div>
        <div className="filter-content">
          <h4>ALL</h4>
          <a href="#" className="unselect-all">Unselect All</a>
          <label><input type="checkbox" /> Men</label>
          <label><input type="checkbox" /> Women</label>
          <label><input type="checkbox" /> Baby & Kids</label>
        </div>
      </div>
      <div className="filter-category">
        <div className="filter-header">
          <h4>OCCASION</h4>
          <img src={ArrowDown} alt="Arrow Down" className="rotate" />
        </div>
        <div className="filter-content">
          <h4>ALL</h4>
        </div>
        <div className="filter-header">
          <h4>WORK</h4>
          <img src={ArrowDown} alt="Arrow Down" className="rotate" />
        </div>
        <div className="filter-content">
          <h4>ALL</h4>
        </div>
        <div className="filter-header">
          <h4>FABRIC</h4>
          <img src={ArrowDown} alt="Arrow Down" className="rotate" />
        </div>
        <div className="filter-content">
          <h4>ALL</h4>
        </div>
        <div className="filter-header">
          <h4>SEGMENT</h4>
          <img src={ArrowDown} alt="Arrow Down" className="rotate" />
        </div>
        <div className="filter-content">
          <h4>ALL</h4>
        </div>
        <div className="filter-header">
          <h4>SUITABLE FOR</h4>
          <img src={ArrowDown} alt="Arrow Down" className="rotate" />
        </div>
        <div className="filter-content">
          <h4>ALL</h4>
        </div>
        <div className="filter-header">
          <h4>RAW MATERIALS</h4>
          <img src={ArrowDown} alt="Arrow Down" className="rotate" />
        </div>
        <div className="filter-content">
          <h4>ALL</h4>
        </div>
        <div className="filter-header">
          <h4>PATTERN</h4>
          <img src={ArrowDown} alt="Arrow Down" className="rotate" />
        </div>
        <div className="filter-content">
          <h4>ALL</h4>
        </div>
        
      </div>
      
    </aside>
  );
};

export default Sidebar;
