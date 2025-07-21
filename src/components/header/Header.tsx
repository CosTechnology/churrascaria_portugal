import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

const Header: React.FC = () => (
  <header className="navbar">
    <img src={logo} alt="Churrascaria Portugal Logo" className="navbar-logo" />
  </header>
);

export default Header;