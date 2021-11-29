import React from 'react';

const CreateCollectionControlSearch = ({ setSearchText, typeClothes, setSection }) => {
  setSection('Новая коллекция');
  const [state, setstate] = React.useState('');
  React.useEffect(() => {
    setstate('');
    setSearchText('');
  }, [typeClothes]);
  function onKeyDownSearch(event) {
    if (event.keyCode === 13) {
      setSearchText(state);
    }
  }
  function imgSearchButton() {
    setSearchText(state);
  }
  return (
    <div style={{ width: '25%', margin: 'auto 0' }}>
      <div
        className="d-flex"
        style={{
          margin: '0 auto',
          width: 250,
          height: 35,

          borderRadius: 38,
          padding: '0px 7px',
          paddingTop: 9,

          border: '1px solid rgba(0, 0, 0, 0.7)',
        }}>
        {' '}
        <input
          style={{
            border: 'none',
            height: 'fit-content',
            width: '90%',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
          }}
          value={state}
          onChange={(e) => setstate(e.target.value)}
          onKeyDown={onKeyDownSearch}
          placeholder="Поиск"
        />
        <svg
          className="cu-p"
          // onClick={imgSearchButton}
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_11_123)">
            <path
              d="M23.7068 22.2928L16.8818 15.4679C18.2038 13.8349 18.9998 11.7599 18.9998 9.49993C18.9998 4.26198 14.7378 0 9.49988 0C4.26193 0 0 4.26193 0 9.49988C0 14.7378 4.26197 18.9998 9.49992 18.9998C11.7599 18.9998 13.8349 18.2038 15.4678 16.8818L22.2928 23.7068C22.4878 23.9018 22.7438 23.9998 22.9998 23.9998C23.2558 23.9998 23.5118 23.9018 23.7068 23.7068C24.0978 23.3158 24.0978 22.6838 23.7068 22.2928ZM9.49992 16.9998C5.36395 16.9998 2 13.6359 2 9.49988C2 5.3639 5.36395 1.99995 9.49992 1.99995C13.6359 1.99995 16.9998 5.3639 16.9998 9.49988C16.9998 13.6359 13.6359 16.9998 9.49992 16.9998Z"
              fill="black"
              fill-opacity="0.7"
            />
          </g>
          <defs>
            <clipPath id="clip0_11_123">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default CreateCollectionControlSearch;
