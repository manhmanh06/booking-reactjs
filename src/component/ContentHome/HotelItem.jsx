import React from 'react';
import styles from './HotelItem.module.css';
const Hotels = () => {
  const hotels = [
    {
      name: 'Aparthotel Stare Miasto',
      city: 'Madrid',
      price: 120,
      rate: 8.9,
      type: 'Excellent',
      image_url: './images/hotel_1.webp',
    },
    {
      name: 'Comfort Suites Airport',
      city: 'Austin',
      price: 140,
      rate: 9.3,
      type: 'Exceptional',
      image_url: './images/hotel_2.jpg',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Lisbon',
      price: 99,
      rate: 8.8,
      type: 'Excellent',
      image_url: './images/hotel_3.jpg',
    },
    {
      name: 'Hilton Garden Inn',
      city: 'Berlin',
      price: 105,
      rate: 8.9,
      type: 'Excellent',
      image_url: './images/hotel_4.jpg',
    },
  ];
  return (
    <div className={styles['home__hotel']}>
      <h1>Homes guests love</h1>
      <div className={styles['hotel__list']}>
        {hotels.map((hotel) => (
          <div className={styles['hotel__item']} key={hotel.name}>
            <img src={hotel.image_url} />
            <a href="">{hotel.name}</a>
            <p>{hotel.city}</p>
            <h3>Starting from ${hotel.price}</h3>
            <p>
              <span>{hotel.rate}</span>
              {hotel.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hotels;
