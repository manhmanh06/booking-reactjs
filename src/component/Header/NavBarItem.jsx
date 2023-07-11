import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarItem.css';
const NavBarItem = function () {
  const navbar = [
    {
      type: 'Stays',
      icon: 'fa-bed',
      active: true,
    },
    {
      type: 'Flights',
      icon: 'fa-plane',
      active: false,
    },
    {
      type: 'Car rentals',
      icon: 'fa-car',
      active: false,
    },
    {
      type: 'Attractions',
      icon: 'fa-bed',
      active: false,
    },
    {
      type: 'Airport taxis',
      icon: 'fa-taxi',
      active: false,
    },
  ];

  return (
    <div className="navbar__container">
      <div className="navbar__header">
        <Link
          to="/"
          className="navbar__title"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Booking Website
        </Link>
        <div>
          <button className="navbar__btn">Register</button>
          <button className="navbar__btn">Login</button>
        </div>
      </div>
      <ul className="navbar__list">
        {navbar.map((item) => (
          <li
            key={item.type}
            className={`navbar__item ${item.active ? 'active' : ''}`}
          >
            <i className={`fa ${item.icon}`}></i>
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavBarItem;
