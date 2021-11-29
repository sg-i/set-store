import React from 'react';
import { Link } from 'react-router-dom';
import '../ControlHeader/ControlHeader.scss';

function ControlHeaderItem({ el, section, setSection }) {
  return (
    <div
      onClick={() => {
        setSection(el);
      }}
      style={section === el ? { borderBottom: 'solid 1px rgba(41, 41, 41, 0.8)' } : {}}
      className="d-flex mr-40 sectionControlItem">
      <Link
        to={
          el === 'Список товаров'
            ? '/control/list'
            : el === 'Добавить товар'
            ? '/control/add'
            : '/control/createcollection'
        }>
        {' '}
        {el}
      </Link>
    </div>
  );
}
export default ControlHeaderItem;
