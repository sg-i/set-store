import React from 'react';
import './SortFilter.scss';

function SortFilter({ item, sortType, setSortType }) {
  return (
    <div>
      <div
        style={{ margin: '15px', marginBottom: -5, marginLeft: 10 }}
        className="d-flex align-center">
        <div
          onClick={() => {
            setSortType(item);
          }}
          className="squaredOne1">
          <div style={sortType === item ? {} : { display: 'none' }} className="squaredTwo"></div>
        </div>
        <div>{item}</div>
      </div>
    </div>
  );
}
export default SortFilter;
