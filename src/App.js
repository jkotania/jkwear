import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Contact from './components/Contact/Contact';
import Account from './components/Account/Account';
import Cart from './components/Cart/Cart';
import Work from './components/Work/Work';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element= {<Cart />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/workinprogress" element={<Work />} />
      </Routes>
      </div>
  );
}

export default App;