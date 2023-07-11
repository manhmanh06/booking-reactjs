import React from 'react';
import City from './City';
import HotelType from './HotelType';
import Hotels from './HotelItem';

import './ContentHome.css';
const ContentHome = () => {
  return (
    <div id="content">
      <City />
      <HotelType />
      <Hotels />
    </div>
  );
};
export default ContentHome;
