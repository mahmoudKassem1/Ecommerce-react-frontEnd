import React from 'react';
import './Items.css';
import { Link } from 'react-router-dom'; 

const Items = ({ id, image, name, old_price, new_price }) => {
  return (
    <div className='item'>
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-old">${old_price}</div>
        <div className="item-price-new">${new_price}</div>
      </div>
    </div>
  );
};

export default Items;
