import React from "react";
import Styles from "../Styles/header.module.css";
import Search from "../Assets/Icons/magnifying-glass.png"

const Header = () => {
  return (
    <div className={Styles.header} >
      <div className={Styles.leftSide}>
        <h1 className={Styles.fontMax}>Discover</h1>
        <p className={Styles.fontMax}>amazing startups</p>
        <p>Find great startups curated by our experts for investing.</p>
        <div className={Styles.inputBox}>
          <p>Startup Name</p>
          <form>
            <input
              placeholder="Ex: Nearbygrocer, Nykaa, etc"
            />
            <button><img alt="search" src={Search}/>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
