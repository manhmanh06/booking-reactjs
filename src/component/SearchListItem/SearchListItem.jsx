import React from 'react';
import './SearchLisstItem.css';
import SearchPopup from './SearchPopup';
import SearchList from './SearchList';
const SearchListItem = function () {
  return (
    <div className="search__container">
      <SearchPopup />
      <SearchList />
    </div>
  );
};
export default SearchListItem;
