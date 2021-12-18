import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './ContentClothesItem.scss';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
function ContentClothesItem({ filtopenWrap, el }) {
  const price_d_item = String(el.price);
  const price = price_d_item.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  const [state, setstate] = React.useState('');
  let location = useLocation();
  React.useEffect(() => {
    setstate(location);
  }, []);
  console.log(location.pathname);
  return (
    <div
      style={
        isMobile
          ? filtopenWrap
            ? { transform: 'scale(1.2)', marginLeft: 150, marginTop: 50 }
            : state === '/newcollection'
            ? {}
            : { width: '365px' }
          : {}
      }
      className="cardClothes">
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
