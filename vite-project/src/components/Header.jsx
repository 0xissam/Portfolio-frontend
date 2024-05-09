import React, { useState, useEffect } from 'react';
import logo from '../img/icons/check.png'

function Header() {

  const [isSticky, setIsSticky] = useState(false);
  const [togeld, settogeld] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function Togeldfunc() {
    settogeld(true);
  }

  function Togeldfuncoff() {
    settogeld(false);
  }


  return (
    <header className={`header-area ${isSticky ? 'sticky' : ''}`}>
  <div className="classy-nav-container dark breakpoint-off left">
    <div className="container">
      {/* Classy Menu */}
      <nav className="classy-navbar justify-content-between" id="dreamNav">
        {/* Logo */}
        <a className="nav-brand" href="index-2.html">
          <img src={logo} alt="logo" />
        </a>
        {/* Navbar Toggler */}
        <div onClick={()=> Togeldfunc()} className="classy-navbar-toggler">
          <span className={`navbarToggler ${togeld ? 'active' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </div>
        {/* Menu */}
        <div className={`classy-menu ${togeld ? 'menu-on' : ''}`}>
          {/* close btn */}
          <div onClick={()=> Togeldfuncoff()} className="classycloseIcon">
            <div className="cross-wrap">
              <span className="top" />
              <span className="bottom" />
            </div>
          </div>
          {/* Nav Start */}
          <div className="classynav">
            <ul id="nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/templates">Templates</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            {/* Button */}
            <a
              href="#test-popup"
              className="open-popup-link btn login-btn mr-im"
            >
              Log in
            </a>
            <a href="#signup-popup" className="open-signup-link btn login-btn">
              Signup{" "}
            </a>
          </div>
          {/* Nav End */}
        </div>
      </nav>
    </div>
  </div>
</header>

  )
}

export default Header