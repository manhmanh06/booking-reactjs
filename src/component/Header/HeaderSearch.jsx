import React from 'react';
import Button from '../Button';
import DateRangePickerComp from '../DateRangePicker';
import './HeaderSearch.css';

const HeaderSearch = () => {
  function clickHandle(e) {
    e.preventDefault();
    location.replace('/search');
  }
  return (
    <div className="header__form">
      <form>
        <div className="form-control">
          <label>
            <i className="fa fa-bed"></i>
          </label>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className="form-control">
          <label>
            <i className="fa fa-calendar"></i>
          </label>

          <DateRangePickerComp />
        </div>
        <div className="form-control">
          <label>
            <i className="fa fa-female"></i>
          </label>
          <input type="text" placeholder="1 adult-0 children-1 room" />
        </div>
        <Button title="Search" type="submit" onClick={clickHandle} />
      </form>
    </div>
  );
};
export default HeaderSearch;
