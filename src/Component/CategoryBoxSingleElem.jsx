import React from 'react';
import Style from "../Styles/category2.module.css";

const CategoryBoxSingleElem = (details) => {
    console.log(details);
  return (
    <div className={Style.singelBox}>
      <b>{details.details}</b>
    </div>
  )
}

export default CategoryBoxSingleElem
