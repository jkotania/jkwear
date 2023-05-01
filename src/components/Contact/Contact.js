import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

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
    
    <section className="contact">
<div className='icon'>
    <Link to={'/'}>
    <i class="fa-solid fa-arrow-left"></i>
    </Link>
</div>
      <h2>Contact</h2>
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
  );
};

export default Contact;
