import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

const name = process.env.REACT_APP_NAME;

const Header: React.FC = () => (
  <header className="navbar">
    <div className="container">
      <img src={logo} alt={`${name} Logo`} className="navbar-logo" />
      <nav className="nav-links">
        {/* Placeholder links - can be updated with real sections later */}
        {/* <a href="#hero" className="nav-link">Início</a>
        <a href="#contact" className="nav-link">Contato</a> */}
      </nav>
    </div>
  </header>
);

export default Header;