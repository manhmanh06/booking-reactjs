import React from 'react';
import './SearchList.css';
import Button from '../Button';
const SearchList = () => {
  const search = [
    {
      name: 'Tower Street Apartments',
      distance: '500m',
      tag: 'Free airport taxi',
      type: 'Entire studio • 1 bathroom • 21m² 1 full bed',
      description: 'Studio Apartment with Air conditioning',
      free_cancel: true,
      price: 112,
      rate: 8.9,
      rate_text: 'Excellent',
      image_url: './images/hotel_search_1.webp',
    },
    {
      name: 'Comfort Suites Airport',
      distance: '200m',
      tag: 'Free Breakfast',
      type: 'Entire studio • 2 bathroom • 100m² 2 full bed',
      description: 'Studio Apartment',
      free_cancel: true,
      price: 140,
      rate: 9.3,
      rate_text: 'Exceptional',
      image_url: './images/hotel_search_2.jpg',
    },
    {
      name: 'Four Seasons Hotel',
      distance: '100m',
      tag: 'Free Parking',
      type: '1 bathroom • 51m² 2 full bed',
      description: 'Hotel in Lisbon',
      free_cancel: false,
      price: 99,
      rate: 8.8,
      rate_text: 'Excellent',
      image_url: './images/hotel_search_3.jpg',
    },
  ];
  return (
    <div className="search__list">
      {search.map((item, index) => (
        <div className="search__item" key={index}>
          <img src={item.image_url} alt="" />
          <div className="search__content ">
            <h2 className="search__name">{item.name}</h2>
            <p className="search__distance">{item.distance} from center</p>
            <span className="search__tag">{item.tag}</span>
            <h4 className="search__description">{item.description}</h4>
            <p className="search__type">{item.type}</p>
            <h5 className="search__free-cancel">
              {item.free_cancel ? 'Free Cancellation' : ''}
            </h5>
            <p className="search__free-cancel">
              {item.free_cancel
                ? 'You can cancel later, so lock,in this great price today !'
                : ''}
            </p>
          </div>
          <div className="search__rate">
            <p className="search__rate_text">
              {item.rate_text} <span>{item.rate}</span>
            </p>
            <div className="search__price">
              <h1>${item.price}</h1>
              <p>Includes taxes and feer</p>
              <Button
                title="See availability"
                onClick={() => location.replace('./detail')}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SearchList;
