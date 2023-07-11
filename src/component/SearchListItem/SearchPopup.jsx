import React from 'react';
import './SearchPopup.css';
import Button from '../Button';
import DateRangePickerComp from '../DateRangePicker';
const SearchPopup = () => {
  return (
    <div className="search__popup">
      <h2>Search</h2>
      <div className="search__popup__desti">
        <label htmlFor="">Destination</label>
        <input type="text" />
      </div>
      <div className="search__popup__date">
        <label htmlFor="">Check-in Date</label>
        <input type="text" />
      </div>
      <div className="search__popup__option">
        <h3>Options</h3>
        <div className="search__popup__option-item">
          <label htmlFor="">Min price per night</label>
          <input type="text" />
        </div>
        <div className="search__popup__option-item">
          <label htmlFor="">Max price per night</label>
          <input type="text" />
        </div>
        <div className="search__popup__option-item">
          <label htmlFor="">Adult</label>
          <input type="text" placeholder="1" />
        </div>
        <div className="search__popup__option-item">
          <label htmlFor="">Children</label>
          <input type="text" placeholder="0" />
        </div>
        <div className="search__popup__option-item">
          <label htmlFor="">Room</label>
          <input type="text" placeholder="1" />
        </div>
      </div>
      <Button title="Search" />
    </div>
  );
};
export default SearchPopup;
