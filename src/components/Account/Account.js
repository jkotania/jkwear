import React, { useState,useEffect } from 'react';
import './Account.css';
import { Link } from 'react-router-dom';
import Navbar from  '../Navbar/Navbar';

const Account = () => {
  const [orders, setOrders] = useState([
    { id: 256, date: '02-04-2023', amount: 299 },
    { id: 189, date: '16-03-2022', amount: 562 },
    { id: 62, date: '28-09-2021', amount: 300 },
  ])
      useEffect(() => {
        document.title = 'Your Account - jkwear';
      }
);

  const renderOrders = () => {
    if (orders.length === 0) {
      return <p>Nie masz jeszcze żadnych zamówień.</p>;
    }

    return (
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date of order</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.amount} zł</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
    <Navbar />
    <div className="account-wrapper">
      <div className="account-box">
        <h2 className="account-box__title">Your account</h2>
        <div className="account-box__section">
          <h3 className="account-box__section-title">Your orders</h3>
          {renderOrders()}
        </div>
        <div className="account-box__section">
          <h3 className="account-box__section-title">Your credit cards</h3>
          <p>We will show there your card if you add one.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Account;
