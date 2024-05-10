import React, { useState, useEffect } from 'react';
import logo from '../img/icons/check.png'
import { Link } from 'react-router-dom';

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
    settogeld(!togeld);
  }


  return (
    <header className={`header-area ${isSticky ? 'sticky' : ''}`}>
  <div className="classy-nav-container dark breakpoint-off left">
    <div className="container">
      {/* Classy Menu */}
      <nav className="classy-navbar justify-content-between" id="dreamNav">
        {/* Logo */}
        <a className="nav-brand" href="index-2.html">
          {/* <img src={logo} alt="logo" /> */}
          <span><span style={{
           color: '#3e94e4'

          }}>Nex</span>CV</span>
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
          <div onClick={()=> Togeldfunc()} className="classycloseIcon">
            <div className="cross-wrap">
              <span className="top" />
              <span className="bottom" />
            </div>
          </div>
          {/* Nav Start */}
          <div className="classynav">
            <ul id="nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            {/* Button */}
            <Link
              to="/login"
              className="open-popup-link btn login-btn mr-im"
            >
              Log in
            </Link>
            <Link to="/register" className="open-signup-link btn login-btn">
              Signup{" "}
            </Link>
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