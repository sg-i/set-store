import React from 'react';
import ControlTableItem from '../ControlTableItemCollection/index';
const ControlTableArrayCollection = ({ clothes }) => {
  return (
    <div>
      {clothes.map((el) => (
        <ControlTableItem el={el} />
      ))}
      {/* </table>{' '} */}
    </div>
  );
};

export default ControlTableArrayCollection;
