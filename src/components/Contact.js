import React from 'react';
import './Contact.css';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p className="tagline">We'd love to hear from you</p>
        </div>

        <div className="contact-sections">
          <section className="contact-section">
            <h2>Our Location</h2>
            <div className="address">
              <p>1 Oritoke Street,</p>
              <p>Off Orilabi Street,</p>
              <p>Kola, Lagos,</p>
              <p>Nigeria</p>
            </div>
          </section>

          <section className="contact-section">
            <h2>Connect With Us</h2>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </section>
        </div>

        <section className="cta-section">
          <h2>Ready to Book Your Session?</h2>
          <p>
            Visit our location or connect with us on social media to schedule your appointment.
            We look forward to making you feel beautiful!
          </p>
          <a href="/booking" className="cta-button">Book Now</a>
        </section>
      </div>
    </div>
  );
};

export default Contact; 