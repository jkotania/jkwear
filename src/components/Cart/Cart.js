import React, {useEffect} from 'react';
import './Cart.css';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
  useEffect(() => {
    document.title = 'Cart - jkwear';
  });
  return (
    <div className='cart'>
    <Navbar />
    <div className="cart-wrapper">
      <h2 className="cart-title">Your cart</h2>
      <p className="cart-message">Your cart is empty.</p>
    </div>
    </div>
  );
};

export default Cart;
