import React from 'react';
import Button from '../Button';
import './DetailItem.css';
const DetailItem = function () {
  const details = {
    name: 'Tower Street Apartments',
    address: 'Elton St 125 New york',
    distance: 'Excellent location - 500m from center',
    price: 'Book a stay over $114 at this property and get a free airport taxi',
    photos: [
      './images/hotel_detail_1.jpg',
      './images/hotel_detail_2.jpg',
      './images/hotel_detail_3.jpg',
      './images/hotel_detail_4.jpg',
      './images/hotel_detail_5.jpg',
      './images/hotel_detail_6.jpg',
    ],
    title: 'Stay in the heart of City',
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };
  return (
    <div className="detail__container">
      <div className="detail__header">
        <div>
          <h1 className="detail__header__name">{details.name}</h1>
          <p className="detail__header__map">
            <i className="fa fa-map-marker"></i>
            {details.address}
          </p>
          <p className="detail__header__excellent">{details.distance}</p>
          <p className="detail__header__price">{details.price}</p>
        </div>
        <Button title="Reserve or Book Now!" />
      </div>
      <div className="detail__img">
        {details.photos.map((image) => (
          <img src={image} key={image} />
        ))}
      </div>
      <div className="detail__content">
        <div>
          <h2>{details.title}</h2>
          <p>{details.description}</p>
        </div>
        <div className="detail__hightlights">
          <h2>Perfect for a 9-night stay!</h2>
          <p>
            Located in the real heart of Krakow, this, property has an excellent
            location score of 9.8!
          </p>
          <h1>
            {`$${details.nine_night_price}`} <span>{`(9 night)`}</span>
          </h1>
          <Button title="Reserve or Book Now!" />
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
