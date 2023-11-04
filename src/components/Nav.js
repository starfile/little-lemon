import React from "react";
import {Link} from 'react-router-dom'

function Nav(props) {
  return (
    <nav>
      <ul className="nav-ul">
{/*
        <li><a href="/" className="nav-item">Home</a></li>
        <li><a href="/about" className="nav-item">About</a></li>
        <li><a href="/menu" className="nav-item">Menu</a></li>
        <li><a href="/reservations" className="nav-item">Reservations</a></li>
        <li><a href="/order-online" className="nav-item">Order Online</a></li>
        <li><a href="/login" className="nav-item">Login</a></li>
*/}
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/about" className="nav-item">About</Link></li>
        <li><Link to="/menu" className="nav-item">Menu</Link></li>
        <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
        <li><Link to="/order-online" className="nav-item">Order Online</Link></li>
        <li><Link to="/login" className="nav-item">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
