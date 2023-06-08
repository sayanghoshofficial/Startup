import React, { useState } from "react";
import Styles from "../Styles/navbar.module.css";
import Menu from "../Assets/Icons/menu.png";
import Cross from "../Assets/Icons/close.png";
import User from "../Assets/Icons/profile.png";
import Logo from "../Assets/Icons/white-logo.png"

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={Styles.main}>
      <div className={Styles.navbar}>
        <div className={Styles.logo}>
          <img alt="logo" src={Logo} />
          <a href="#">Welcome to my StartUp</a>
        </div>
        <ul className={Styles.link}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">StartUp</a>
          </li>
          <li>
            <a href="#">Investors</a>
          </li>
          <li>
            <a href="#">
              <img alt="user" src={User} />
              Login
            </a>
          </li>
        </ul>
        <a href="#" className={Styles.actionBtn}>
          Add Listing {">"}
        </a>
        <div className={Styles.toggleBtn}>
          <img alt="menu" src={menu ? Menu : Cross} onClick={toggleMenu} />
        </div>
      </div>
      <div
        style={menu ? { display: "none" } : null}
        className={Styles.dropDownMenu}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">StartUp</a>
        </li>
        <li>
          <a href="#">Investors</a>
        </li>
        <li>
          <a href="#">
            <img alt="user" src={User} />
            Login
          </a>
        </li>
        <li>
          <a href="#" className={Styles.actionBtn}>
            Add Listing {">"}
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
