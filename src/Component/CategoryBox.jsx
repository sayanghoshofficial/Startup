import React from "react";
import Styles from "../Styles/explore.module.css";

const CategoryBox = ({ img, sub }) => {
  return (
    <div className={Styles.CategoryBox}>
      <div className={Styles.image}>
        <img src={img} alt="Catagory-Image" />
      </div>
      <p>{sub}</p>
    </div>
  );
};

export default CategoryBox;
