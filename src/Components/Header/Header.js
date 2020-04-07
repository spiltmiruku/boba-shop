import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import teawood from "../../resources/tea-wood.jpg";

const Header = () => {
  return (
    <div>
      <section className="header-logo-links">
        <div className="logo">meo TEA</div>

        <section className="header-links-box">
          <div className="header-nav-links">
            <Link to="/">HOME</Link>
          </div>
          <div className="header-nav-links">
            <Link to="/menu">MENU</Link>
          </div>
          <div className="header-nav-links">
            <Link to="/about">HOURS</Link>
          </div>
        </section>
      </section>

      <div className="header-banner">
        <img id="picture-banner" src={teawood} alt="bubble tea" />
        <div className='banner-overlay'>
        </div>
        <h1 className="banner-text">premium & handcrafted milk teas</h1>
      </div>
    </div>
  );
};

export default Header;
