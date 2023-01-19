import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <header className="header">
    <h1 className="header-title">Bookstore</h1>
    <nav className="navbar">
      <ul className="navbar-lists">
        <li className="navbar-list">
          <Link to="/"> Home </Link>
        </li>
        <li className="navbar-list">
          <Link to="/categories"> Categories </Link>
        </li>
        <li className="user">
          <FaUser />
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
