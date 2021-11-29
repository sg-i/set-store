import React from 'react';
import './MainPageContentItem.scss';
import WhiteButton from '../WhiteButton';
import { Link } from 'react-router-dom';

import { arraySection } from '../../arraysDate';
function MainPageContentItem({ title, text, type }) {
  return (
    <div style={{ margin: 'auto 0', width: '46%' }}>
      <div className="d-flex flex-column">
        <b className="titleMainPageContentItem">{title}</b>
        <span className="textMainPageContentItem">{text}</span>
        <Link to={type}>
          <WhiteButton title="Перейти" />
        </Link>
      </div>
    </div>
  );
}
export default MainPageContentItem;
