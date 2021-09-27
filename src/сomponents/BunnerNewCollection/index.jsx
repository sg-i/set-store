import React from 'react';
import BlackButton from '../BlackButton';
import './BunnerNewCollection.scss';
function BunnerNewCollection() {
  return (
    <div>
      <div
        className="wrapBunnerNewCollection"
        style={{ backgroundImage: 'url(image/NewCollect.png)' }}>
        <div className="newCollectInfo d-flex flex-column">
          <span
            style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 35, marginBottom: 5 }}>
            Новая коллекция
          </span>
          <b style={{ fontStyle: 'normal', fontWeight: 500, fontSize: 40, marginBottom: 5 }}>
            Lituania d'autunno
          </b>
          <span
            style={{
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 24,
              color: 'rgba(41, 41, 41, 0.9)',
              marginBottom: 10,
              marginLeft: 2,
            }}>
            Новинки для нее и для него
          </span>
          <BlackButton />
        </div>
      </div>
    </div>
  );
}
export default BunnerNewCollection;
