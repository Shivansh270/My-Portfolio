import React, { useState } from 'react';
import './Contact.css';
import {FcPhoneAndroid} from "react-icons/fc";
import {FiMail} from "react-icons/fi";


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('message', message);

    fetch('https://getform.io/f/b6c526c7-e049-42e8-a30f-051658ec2407', {
      method: 'POST',
      body: form,
    })
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className='contact-page'>
      <h2 className="head-text">Dropping a Line to Say Hello?</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <FiMail className="mail-icon" />
          <a href="mailto:gupta.shivansh2709@gmail.com" className="p-text"> gupta.shivansh2709@gmail.com.com</a>
        </div>
        <div className="app__footer-card">
          <FcPhoneAndroid className="phone-icon" />
          <a href="tel:+91 9149435734" className="p-text">+91 9149435734</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type="submit" className="p-text" disabled={loading}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};

export default Contact;


