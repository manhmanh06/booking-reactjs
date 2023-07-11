import React from 'react';
import styles from './HotelType.module.css';
const HotelType = () => {
  const types = [
    {
      name: 'Hotels',
      count: 233,
      image: './images/type_1.webp',
    },
    {
      name: 'Apartments',
      count: 2331,
      image: './images/type_2.jpg',
    },
    {
      name: 'Resorts',
      count: 2331,
      image: './images/type_3.jpg',
    },
    {
      name: 'Villas',
      count: 2331,
      image: './images/type_4.jpg',
    },
    {
      name: 'Cabins',
      count: 2331,
      image: './images/type_5.jpg',
    },
  ];
  return (
    <div className={styles['home__type']}>
      <h1>Browse by property type</h1>
      <div className={styles['type__list']}>
        {types.map((type) => (
          <div className={styles['type__item']} key={type.name}>
            <img src={type.image} alt="" />
            <h3>{type.name}</h3>
            <p>{type.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HotelType;
