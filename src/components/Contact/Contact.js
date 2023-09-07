import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import './Contact.css';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  useEffect(() => {
    document.title = 'Contact - jkwear';
  }
);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Do something with the form data here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Navbar />
    <section className="contact">
      <h2>Contact us!</h2>
      <p>Use this contact form to send us message.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Topic:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
    </>
  );
};

export default Contact;
