import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Get in Touch</h1>
      <div className="contact-details">
        {contactInfo.map((item, index) => (
          <ContactItem key={index} icon={item.icon} info={item.info} />
        ))}
      </div>
    </div>
  );
};

const ContactItem = ({ icon: Icon, info }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="contact-item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={40} className={`contact-icon ${hovered ? 'hovered' : ''}`} />
      <p className={`contact-text ${hovered ? 'visible' : ''}`}>{info}</p>
    </div>
  );
};

const contactInfo = [
  { icon: FaPhoneAlt, info: '+123 456 7890' },
  { icon: FaEnvelope, info: 'email@example.com' },
  { icon: FaInstagram, info: '@yourinstagram' },
  { icon: FaLinkedin, info: 'LinkedIn Profile' },
];

export default Contact;
