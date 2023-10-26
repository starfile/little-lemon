import React from 'react';

export function Footer(props) {
  return (
    <footer>
      Doormat Navigation
      <ul>
        <li>
          <a href='home' >Home</a>
        </li>
        <li>
          <a href='about' >About</a>
        </li>
        <li>
          <a href='menu' >Menu</a>
        </li>
        <li>
          <a href='reservations' >Reservations</a>
        </li>
        <li>
          <a href='order-online' >Order Online</a>
        </li>
        <li>
          <a href='login' >Login</a>
        </li>
      </ul>
      Contact
      <ul>
        <li>
          Address
          phone number
          email
        </li>
      </ul>
      Social Media Links
      <ul>
        <li>
          ...
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
