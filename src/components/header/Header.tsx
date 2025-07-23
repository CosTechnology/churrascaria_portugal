import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

const name = process.env.REACT_APP_NAME;

const Header: React.FC = () => (
  <header className="navbar">
    <img src={logo} alt={`${name} Logo`} className="navbar-logo" />
  </header>
);

export default Header;