import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <header className="header">
    <nav className="navbar">
      <a className="brand" href="#/">
        Bookstore
      </a>
      <ul className="navbar-lists">
        <li className="navbar-list">
          <Link to="/"> Home </Link>
        </li>
        <li className="navbar-list">
          <Link to="/categories"> Categories </Link>
        </li>
      </ul>
      <button type="button" className="user">
        <FaUser />
      </button>
    </nav>
  </header>
);

export default Navbar;
