import React from 'react';

import './Location.scss';
function Location() {
  return (
    <div className="wrapLocation d-flex flex-column">
      <p className="titleLocation">МЕСТОПОЛОЖЕНИЕ</p>
      <b style={{ fontSize: '17px' }}>
        Все товары представленые на сайте вы можете примерить и приобрести в нашем магазине.
      </b>
      <div>
        <p>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.50017 0C3.8614 0 1.71436 2.14704 1.71436 4.78608C1.71436 5.47444 1.85525 6.13167 2.13291 6.73968C3.32949 9.35809 5.62368 12.1226 6.29848 12.9074C6.34903 12.9661 6.42274 12.9999 6.5003 12.9999C6.57786 12.9999 6.65157 12.9661 6.70213 12.9074C7.37665 12.1227 9.67084 9.35836 10.8678 6.73968C11.1456 6.13167 11.2864 5.47444 11.2864 4.78608C11.2861 2.14704 9.13907 0 6.50017 0ZM6.50017 7.27198C5.12943 7.27198 4.01413 6.15668 4.01413 4.78594C4.01413 3.41507 5.12943 2.29978 6.50017 2.29978C7.87091 2.29978 8.9862 3.41507 8.9862 4.78594C8.98634 6.15668 7.87104 7.27198 6.50017 7.27198Z"
              fill="#292929"
            />
          </svg>
          <b>Адрес:</b> Санкт-Петербург, ул. Гастелло, 15. В 5 минутах ходьбы от станции метро
          Московская.
        </p>
        <div>
          <svg
            style={{ marginRight: '6px' }}
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.81613 7.64793L7.00357 6.28852V3.51937C7.00357 3.24093 6.77851 3.01587 6.50008 3.01587C6.22164 3.01587 5.99658 3.24093 5.99658 3.51937V6.54029C5.99658 6.69888 6.0711 6.84843 6.19798 6.94309L8.21191 8.45355C8.30253 8.52152 8.40828 8.55425 8.5135 8.55425C8.66707 8.55425 8.81812 8.48527 8.91681 8.35235C9.08401 8.13028 9.03868 7.8146 8.81613 7.64793Z"
              fill="#292929"
            />
            <path
              d="M6.5 0C2.91568 0 0 2.91568 0 6.5C0 10.0843 2.91568 13 6.5 13C10.0843 13 13 10.0843 13 6.5C13 2.91568 10.0843 0 6.5 0ZM6.5 11.993C3.47153 11.993 1.00697 9.52847 1.00697 6.5C1.00697 3.47153 3.47153 1.00697 6.5 1.00697C9.52897 1.00697 11.993 3.47153 11.993 6.5C11.993 9.52847 9.52847 11.993 6.5 11.993Z"
              fill="#292929"
            />
          </svg>
          <b>Часы работы:</b> Пн-Сб 14:00 до 20:00, Вс 14:00 до 18:00.
        </div>
      </div>
      <img src="image/location.png" alt="" />
    </div>
  );
}
export default Location;
