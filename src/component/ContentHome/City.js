import React from 'react';
import styles from './City.module.css';
const City = () => {
  const citys = [
    {
      name: 'Dublin',
      subText: '123 properties',
      image: './images/city_1.webp',
    },
    {
      name: 'Reno',
      subText: '533 properties',
      image: './images/city_2.webp',
    },
    {
      name: 'Austin',
      subText: '532 properties',
      image: './images/city_3.webp',
    },
  ];

  return (
    <div className={styles['home__city']}>
      {citys.map((city) => (
        <div
          key={city.name}
          style={{ backgroundImage: `url(${city.image})` }}
          className={styles['home__city__item']}
        >
          <div>
            <h1>{city.name}</h1>
            <h3>{city.subText}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
export default City;
