import React from 'react';
import { Link } from 'react-router-dom';

import './ContentClothesItem.scss';

function ContentClothesItem({ el }) {
  const price_d_item = String(el.price);
  const price = price_d_item.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

  return (
    <div className="cardClothes">
      <Link to={`product/${el._id}`}>
        <div style={{ margin: '0 auto', width: 'min-content' }}>
          <img height="350" src={el.imageUrl} alt="" />
        </div>
        <div className="cartClothesText">{el.name}</div>
        <div className="cartClothesPrice">{price + ' ₽'}</div>
      </Link>
    </div>
  );
}
export default ContentClothesItem;
