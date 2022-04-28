import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-section">
        <Link to={'/'} className="logo">
          RecipesHub
        </Link>

        <h4>
          RecipesHub is a place where you can please your soul and tummy with
          delicious food recipes of all cuisine. And our service is absolutely
          free.
        </h4>
        <br />
        <p>&copy; 2022 | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>recipeshub@gmail.com</p>
        <p>+457-4578-4352</p>
        <p>456 Street USA</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
};
