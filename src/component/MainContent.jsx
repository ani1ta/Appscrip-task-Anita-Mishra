/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../styles/maincontent.css';
import Heart from '../assets/heart.svg';

const MainContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.slice(0, 18))); // Limit to 18 products
  }, []);

  return (
    <main className="main">
      <div className="productGrid">
        {products.map(product => (
          <div key={product.id} className="productCard">
            <img src={product.image} alt={product.title} />
            <div className="productInfo">
              <div className='productInfo1'>
                <h3>PRODUCT NAME</h3>
                <img src={Heart} alt="wish List" className='wishList'/>
              </div>
              <div className='product--signIn'>
                <p><span className="signIn">Sign in</span> or Create an account to see pricing</p>
                <img src={Heart} alt="wish List" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
