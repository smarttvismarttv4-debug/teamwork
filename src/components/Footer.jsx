import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-brand">
            <h1 className="footer-logo">MORENT</h1>
            <p className="footer-vision">
              Our vision is to provide convenience <br />
              and help increase your sales business.
            </p>
          </div>

          <div className="footer-links-container">
            <div className="footer-link-group">
              <h3>About</h3>
              <ul>
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h3>Community</h3>
              <ul>
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h3>Socials</h3>
              <ul>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">©2022 MORENT. All rights reserved</p>
          <div className="footer-legal">
            <span>Privacy & Policy</span>
            <span>Terms & Condition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;