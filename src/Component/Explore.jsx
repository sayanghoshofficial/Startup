import React from "react";
import Category from "./Category";
import CatagoryType2 from "./CatagoryType2";
import {
  BusinessNatureData,
  FundingData,
  InterestType,
  InvestmentNatureData,
  StageData,
  buisnessType,
} from "../Data";


const Explore = () => {
  return (
    <div>
      <Category />
      <CatagoryType2 sub="Business Model" data={buisnessType} />
      <CatagoryType2 sub="Interested In" data={InterestType} />
      <CatagoryType2 sub="Stage" data={StageData} />
      <CatagoryType2 sub="Funding Type" data={FundingData} />
      <CatagoryType2 sub="Business Nature" data={BusinessNatureData} />
      <CatagoryType2 sub="Investment Nature" data={InvestmentNatureData} />
    </div>
  );
};

export default Explore;
