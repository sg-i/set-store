import React from 'react';
import './WhiteButton.scss';
function WhiteButton({ title, type }) {
  return (
    <div className="buttonWhiteWrap">
      <p className="whiteBut">{title}</p>
    </div>
  );
}
export default WhiteButton;
