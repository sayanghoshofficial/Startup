import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Styles from "../Styles/explore.module.css";
import { category } from "../Data/data";
import CategoryBox from "./CategoryBox";

const Category = () => {
  const itemsPerPage = 4; // Number of items to show per page

  const [startIndex, setStartIndex] = useState(0); // Index of the first item to display

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? category.length - itemsPerPage : newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= category.length - itemsPerPage + 1 ? 0 : newIndex;
    });
  };

  return (
    <>
      <div className={Styles.chevron}>
        <div className={Styles.ChevronSide} onClick={handlePrev}>
          <ChevronLeft />
        </div>
        <div className={Styles.ChevronSide} onClick={handleNext}>
          <ChevronRight />
        </div>
      </div>
      <div className={Styles.category}>
        <p>
          Explore By <b>Category</b>
        </p>
        <div className={Styles.catagoryStore}>
          {category
            .slice(startIndex, startIndex + itemsPerPage)
            .map((c, index) => (
              <CategoryBox img={c.photo} sub={c.sub} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Category;
