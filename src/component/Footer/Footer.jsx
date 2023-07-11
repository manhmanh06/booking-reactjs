import React from 'react';
import styles from './Footer.module.css';
function Footer() {
  const footers = [
    {
      col_number: 1,
      col_values: [
        'Countries',
        'Regions',
        'Cities',
        'Districts',
        'Airports',
        'Hotels',
      ],
    },
    {
      col_number: 2,
      col_values: [
        'Homes',
        'Apartments',
        'Resorts',
        'Villas',
        'Hostels',
        'Guest houses',
      ],
    },
    {
      col_number: 3,
      col_values: [
        'Unique places to stay',
        'Reviews',
        'Unpacked: Travel articles',
        'Travel communities',
        'Seasonal and holiday deals',
      ],
    },
    {
      col_number: 4,
      col_values: [
        'Car rental',
        'Flight Finder',
        'Restaurant reservations',
        'Travel Agents',
      ],
    },
    {
      col_number: 5,
      col_values: [
        'Curtomer Service',
        'Partner Help',
        'Careers',
        'Sustainability',
        'Press center',
        'Safety Resource Center',
        'Investor relations',
        'Terms & conditions',
      ],
    },
  ];
  return (
    <div>
      <div className={styles['footer__list']}>
        {footers.map((footer) => (
          <ul className={styles['footer__item']} key={footer.col_number}>
            {footer.col_values.map((value, index) => (
              <li key={index}>
                <a href="">{value}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
export default Footer;
