import React, { useState } from "react";
import Styles from "../Styles/navbar.module.css";
import Menu from "../Assets/Icons/menu.png";
import Cross from "../Assets/Icons/close.png"

const Navbar = () => {
    const [menu, setMenu] = useState(true);

    const toggleMenu=()=>{
        setMenu(!menu);
    }
  return (
    <div className={Styles.main}>
      <div className={Styles.navbar}>
        <div className="logo">
          <a href="#">Welcome to my StartUp</a>
        </div>
        <ul className={Styles.link}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <a href="#" className={Styles.actionBtn}>
          Get Started
        </a>
        <div  className={Styles.toggleBtn}>
          <img alt="menu" src={menu?Menu:Cross} onClick={toggleMenu}/>
        </div>
      </div>
      <div style={menu?{display:'none'}:null} className={Styles.dropDownMenu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#" className={Styles.actionBtn}>
            Get Started
          </a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
