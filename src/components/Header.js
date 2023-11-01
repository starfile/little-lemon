import React from "react";
import logo from '../assets/images/header-logo.svg';

function Header(props) {
  return (
    <header>
      <img src={logo} alt="Little Lemon restaurant logo" />
    </header>
  );
}

export default Header;
