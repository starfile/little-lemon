import React from "react";
import logo from '../assets/images/footer-logo.png';
import {Link} from 'react-router-dom'

function Footer(props) {
  return (
    <footer>
      <section>
        <img id="footer-logo" src={logo} alt="Little Lemon restaurant logo" />
      </section>
      <section>
        Navigation
        <ul className="footer-ul">
{/*
          <li><a href="/home" className="footer-nav-item">Home</a></li>
          <li><a href="/about" className="footer-navnav-item">About</a></li>
          <li><a href="/menu" className="footer-nav-item">Menu</a></li>
          <li><a href="/reservations" className="footer-nav-item">Reservations</a></li>
          <li><a href="/order-online" className="footer-nav-item">Order Online</a></li>
          <li><a href="/login" className="footer-nav-item">Login</a></li>
*/}
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/menu" className="nav-item">Menu</Link></li>
          <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
          <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
          <li><Link to="/login" className="nav-item">Login</Link></li>
        </ul>
      </section>
      <section>
        Contact
        <ul className="footer-ul">
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        Social Media
        <ul className="footer-ul">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
