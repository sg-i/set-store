import React from 'react';

import './DesignersFilter.scss';
import { AppContext } from '../../context';

function DesignersFilter({ typeClothes, designersAdded, setDesignersAdded, item }) {
  const [designerItemOpen, setDesignerItemOpen] = React.useState(false);
  React.useEffect(() => {
    setDesignerItemOpen(false);
  }, [typeClothes]);
  return (
    <div>
      <div
        style={{ margin: '15px', marginBottom: -5, marginLeft: 10 }}
        className="d-flex align-center">
        <div
          onClick={() => {
            if (!designerItemOpen) {
              setDesignersAdded([...designersAdded, item]);
            } else {
              setDesignersAdded([...designersAdded.filter((elem) => elem !== item)]);
            }
            setDesignerItemOpen(!designerItemOpen);
          }}
          className="squaredOne1">
          <div style={designerItemOpen ? {} : { display: 'none' }} className="squaredTwo"></div>
        </div>
        <div>{item}</div>
      </div>
    </div>
  );
}
export default DesignersFilter;
