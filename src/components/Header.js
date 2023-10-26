import React from 'react';
import logo from '../assets/Logo.svg';

export function Header(props) {
  return (
    <header>
      <img src={logo} alt='Logo' />
    </header>
  )
}

export default Header;
