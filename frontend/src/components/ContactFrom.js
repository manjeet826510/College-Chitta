import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    text: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact/send-email', formData);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
    try {
      await axios.post('/api/contact/save-details', formData);
      alert('Details saved in Database successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to save details in database. Please try again later.');
    }
  };


  return (
    <section className="contact" id="contact">
      <h2 className="text-center">Contact Us</h2>
      <div className="form">
        <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
        <input className="form-input" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" />
        <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
        <textarea className="form-input" name="text" value={formData.text} onChange={handleChange} cols="30" rows="10" placeholder="Elaborate your concern"></textarea>
        <button className="btn btn-sm btn-dark" onClick={handleSubmit}>Submit</button>
      </div>
    </section>
  );
};

export default ContactForm;
