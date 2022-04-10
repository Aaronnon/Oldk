import React, { Fragment, useState } from "react";
import "./index.css";
function Header() {
  const [navbar, setNavbar] = useState(false);
  const [navbarMenu, setNavbarMenu] = useState(false);

  const changeNavbar = () => {
    window.scrollY >= 52 ? setNavbar(true) : setNavbar(false);
  };

  const changeMenu = () => {
    if (!navbarMenu) {
      setNavbarMenu(true);
    } else {
      setNavbarMenu(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <Fragment>
      <section className="banner" id="banner">
        <header className={!navbar ? "navbar" : "navbar active"}>
          <a href="/" className="logo">
            old<span>K</span>
          </a>
          <div
            onClick={changeMenu}
            className={!navbarMenu ? "menuToggle" : "menuToggle active"}
          ></div>
          <ul className={navbarMenu ? "navigation active" : "navigation"}>
            <li>
              <a href="#banner">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#brand">Menu</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>

            <li>
              <a href="#join">Join Us</a>
            </li>
          </ul>
        </header>
        <div className="shadow-box"></div>
        <div className="content">
          <h2>Old <span>K</span> Fried Chicken</h2>

          <p>
            老k炸鸡
          </p>
          <a href="/" className="btn">
            Order Now
          </a>
        </div>
      </section>
    </Fragment>
  );
}

export default Header;
