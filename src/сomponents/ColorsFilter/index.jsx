import React from 'react';

import './ColorsFilter.scss';
import { AppContext } from '../../context';

function ColorsFilter({ colorsAdded, setColorsAdded, item }) {
  const [colorItemOpen, setColorItemOpen] = React.useState(false);

  return (
    <div>
      <div
        style={{ margin: '15px', marginBottom: -5, marginLeft: 10 }}
        className="d-flex align-center">
        <div
          onClick={() => {
            if (!colorItemOpen) {
              setColorsAdded([...colorsAdded, item]);
            } else {
              setColorsAdded([...colorsAdded.filter((elem) => elem !== item)]);
            }
            setColorItemOpen(!colorItemOpen);
          }}
          className="squaredOne1">
          <div style={colorItemOpen ? {} : { display: 'none' }} className="squaredTwo"></div>
        </div>
        <div>{item}</div>
      </div>
    </div>
  );
}
export default ColorsFilter;
