import React from "react";
import logo from '../assets/images/footer-logo.png';

function Footer(props) {
  return (
    <footer>
      <section>
        <img src={logo} alt="Little Lemon restaurant logo" />
      </section>
      <section>
        <h1>Navigation</h1>
        <ul class="footer-nav">
          <li><a href="/home" className="footer-nav-item">Home</a></li>
          <li><a href="/about" className="footer-navnav-item">About</a></li>
          <li><a href="/menu" className="footer-nav-item">Menu</a></li>
          <li><a href="/reservations" className="footer-nav-item">Reservations</a></li>
          <li><a href="/order-online" className="footer-nav-item">Order Online</a></li>
          <li><a href="/login" className="footer-nav-item">Login</a></li>
        </ul>
      </section>
      <section>
        <h1>Contact</h1>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h1>Social Media</h1>
        <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Youtube</li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
