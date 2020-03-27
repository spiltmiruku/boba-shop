import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <div>
        <div className='logo'>meo TEA</div>
      <div>
        <Link to="/">HOME</Link>
      </div>
      <div>
        <Link to="/menu">MENU</Link>
      </div>
      <div>
        <Link to="/about">HOURS</Link>
      </div>
      <div className='header-banner'>
          <h1>premium & handcrafted milk teas</h1>
      </div>
    </div>
  );
};

export default Header;