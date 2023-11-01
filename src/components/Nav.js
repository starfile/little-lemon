import React from "react";

function Nav(props) {
  return (
    <nav>
      <ul className="nav-ul">
        <li><a href="/home" className="nav-item">Home</a></li>
        <li><a href="/about" className="nav-item">About</a></li>
        <li><a href="/menu" className="nav-item">Menu</a></li>
        <li><a href="/reservations" className="nav-item">Reservations</a></li>
        <li><a href="/order-online" className="nav-item">Order Online</a></li>
        <li><a href="/login" className="nav-item">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
