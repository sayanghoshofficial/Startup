import React from 'react';
import Styled from "../Styles/explore.module.css";
import Styles from "../Styles/category2.module.css";
import CategoryBoxSingleElem from './CategoryBoxSingleElem';

const CatagoryType2 = ({ sub, data }) => {
  return (
    <div className={Styled.category}>
      <p>
        Explore By <b>{sub}</b>
      </p>
      <div className={Styles.categoryStore}>
        {data.map((d, i) => {
          return <CategoryBoxSingleElem details={d} key={i} />;
        })}
      </div>
    </div>
  );
}

export default CatagoryType2;
