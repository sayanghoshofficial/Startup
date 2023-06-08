import React from 'react';
import Category from './Category';
import CatagoryType2 from './CatagoryType2';
import {buisnessType} from '../Data/BuisnessModelData';
import {InterestType} from '../Data/InterestData';

const Explore = () => {
  return (
    <div>
    <Category/>
    <CatagoryType2 sub="Business Model" data={buisnessType}/>
    <CatagoryType2 sub="Interested In" data={InterestType}/>
    </div>
  )
}

export default Explore;
