import axios from 'axios';
import React from 'react';
import '../ControlTable.scss';
const ControlTableItem = ({ updateClothesItems, el, clothes, loadingClothes }) => {
  const [type, setType] = React.useState('No');
  const [sizeS, setSizeS] = React.useState('No');
  const [sizeSChange, setSizeSChange] = React.useState(false);

  const [sizeM, setSizeM] = React.useState('No');
  const [sizeMChange, setSizeMChange] = React.useState(false);

  const [sizeL, setSizeL] = React.useState('No');
  const [sizeLChange, setSizeLChange] = React.useState(false);

  const [sizeXL, setSizeXL] = React.useState('No');
  const [sizeXLChange, setSizeXLChange] = React.useState(false);

  const [changeAnyone, setChangeAnyone] = React.useState(false);

  const [nameTableState, setNameTableState] = React.useState('');
  const [nameTableStateChange, setNameTableStateChange] = React.useState(false);

  const [descriptionTableState, setDescriptionTableState] = React.useState('');
  const [descriptionTableStateChange, setDescriptionTableStateChange] = React.useState(false);

  const [priceTableState, setPriceTableState] = React.useState('');
  const [priceTableStateChange, setPriceTableStateChange] = React.useState(false);

  const [designerTableState, setDesignerTableState] = React.useState('');
  const [designerTableStateChange, setDesignerTableStateChange] = React.useState(false);

  React.useEffect(() => {
    setSizeS(el.sizes[0].S);
    setSizeM(el.sizes[1].M);
    setSizeL(el.sizes[2].L);
    setSizeXL(el.sizes[3].XL);

    switch (el.type) {
      case 'top':
        setType('Верхняя одежда');
        break;
      case 'pants':
        setType('Брюки');
        break;
      case 'shoes':
        setType('Обувь');
        break;
      case 'watch':
        setType('Часы');
        break;
    }

    // setNameTableState(el.name);
    // setDescriptionTableState(el.description);
    // setPriceTableState(el.price);
    // setDesignerTableState(el.designer);
  }, []);
  React.useEffect(() => {
    switch (el.type) {
      case 'top':
        setType('Верхняя одежда');
        break;
      case 'pants':
        setType('Брюки');
        break;
      case 'shoes':
        setType('Обувь');
        break;
      case 'watch':
        setType('Часы');
        break;
    }
  }, [clothes]);
  React.useEffect(() => {
    setSizeSChange(false);
    setSizeMChange(false);
    setSizeLChange(false);
    setSizeXLChange(false);
    setChangeAnyone(false);
    setNameTableStateChange(false);
    setDescriptionTableStateChange(false);
    setPriceTableStateChange(false);
    setDesignerTableStateChange(false);
    setSizeS(el.sizes[0].S);
    setSizeM(el.sizes[1].M);
    setSizeL(el.sizes[2].L);
    setSizeXL(el.sizes[3].XL);
    setNameTableState(el.name);
    setDescriptionTableState(el.description);
    setPriceTableState(el.price);
    setDesignerTableState(el.designer);
    // console.log(el);
  }, [clothes]);

  React.useEffect(() => {
    if (loadingClothes) {
      console.log('------');
      console.log(nameTableStateChange);
      console.log(descriptionTableStateChange);
      console.log(priceTableStateChange);
      console.log(designerTableStateChange);
      console.log('------');
      setChangeAnyone(
        sizeSChange ||
          sizeMChange ||
          sizeLChange ||
          sizeXLChange ||
          nameTableStateChange ||
          descriptionTableStateChange ||
          priceTableStateChange ||
          designerTableStateChange,
      );
    }
  }, [
    sizeSChange,
    sizeMChange,
    sizeLChange,
    sizeXLChange,
    nameTableStateChange,
    descriptionTableStateChange,
    priceTableStateChange,
    designerTableStateChange,
  ]);
  //  descriptionTableState, priceTableState, designerTableState
  // React.useEffect(() => {
  //   console.log(`changeAnyone ${changeAnyone}`);
  // }, [changeAnyone]);

  function postSaveItem() {
    axios
      .post('/updateItem', {
        _id: el._id,
        name: nameTableState,
        description: descriptionTableState,
        price: priceTableState,
        designer: designerTableState,
        sizes: [
          {
            S: sizeS,
          },
          {
            M: sizeM,
          },
          {
            L: sizeL,
          },
          {
            XL: sizeXL,
          },
        ],
      })
      .then((res) => {
        console.log(res.data);
        updateClothesItems();
        setSizeSChange(false);
        setSizeMChange(false);
        setSizeLChange(false);
        setSizeXLChange(false);
        setChangeAnyone(false);
        setNameTableStateChange(false);
        setDescriptionTableStateChange(false);
        setPriceTableStateChange(false);
        setDesignerTableStateChange(false);
      });
  }

  // React.useEffect(() => {
  //   console.log('change');
  // }, [nameTableStateChange]);
  return (
    <tr style={changeAnyone ? { backgroundColor: '#fff5d1' } : { backgroundColor: 'white' }}>
      <td>
        <textarea
          onChange={(event) => {
            setNameTableState(event.target.value);
            if (el.name !== event.target.value) {
              setNameTableStateChange(true);
            } else {
              setNameTableStateChange(false);
            }
          }}
          style={
            changeAnyone
              ? { backgroundColor: '#fff5d1', border: 'none', resize: 'none' }
              : { backgroundColor: 'white', border: 'none', resize: 'none' }
          }
          value={nameTableState}
          cols="25"
          rows="5"></textarea>
      </td>
      <td>
        <img className="imgTable" src={el.imageUrl} alt="" />
      </td>
      <td>{type}</td>
      <td>
        <textarea
          onChange={(event) => {
            setDescriptionTableState(event.target.value);

            if (el.description !== event.target.value) {
              setDescriptionTableStateChange(true);
            } else {
              setDescriptionTableStateChange(false);
            }
          }}
          style={
            changeAnyone
              ? { backgroundColor: '#fff5d1', border: 'none', resize: 'none' }
              : { backgroundColor: 'white', border: 'none', resize: 'none' }
          }
          value={descriptionTableState}
          cols="70"
          rows="5"></textarea>
      </td>
      <td>
        <textarea
          onChange={(event) => {
            console.log(event.target.value);
            console.log(el.price);
            setPriceTableState(event.target.value);
            if (el.price.toString() !== event.target.value) {
              console.log(`true el.price ${el.price} event.target.value ${event.target.value}`);
              setPriceTableStateChange(true);
            } else {
              console.log(`false el.price ${el.price} event.target.value ${event.target.value}`);
              setPriceTableStateChange(false);
            }
          }}
          style={
            changeAnyone
              ? { backgroundColor: '#fff5d1', border: 'none', resize: 'none' }
              : { backgroundColor: 'white', border: 'none', resize: 'none' }
          }
          value={priceTableState}
          cols="10"
          rows="5"></textarea>
      </td>
      <td>
        <textarea
          onChange={(event) => {
            setDesignerTableState(event.target.value);

            if (el.designer !== event.target.value) {
              setDesignerTableStateChange(true);
            } else {
              setDesignerTableStateChange(false);
            }
          }}
          style={
            changeAnyone
              ? { backgroundColor: '#fff5d1', border: 'none', resize: 'none' }
              : { backgroundColor: 'white', border: 'none', resize: 'none' }
          }
          value={designerTableState}
          cols="10"
          rows="5"></textarea>
      </td>
      <td>
        <div className="d-flex flex-column">
          <div className="d-flex mb-5" style={{ margin: '0 auto', width: 46 }}>
            <div
              style={{ marginTop: 2, marginRight: 7 }}
              onClick={() => {
                console.log(el.sizes[0].S);
                console.log(sizeS);
                if (el.sizes[0].S !== sizeS) {
                  setSizeSChange(false);
                } else {
                  setSizeSChange(true);
                }
                sizeS === 'Yes' ? setSizeS('No') : setSizeS('Yes');
              }}
              className="squaredOne1">
              <div style={sizeS === 'Yes' ? {} : { display: 'none' }} className="squaredTwo"></div>
            </div>
            <div>S</div>
          </div>
          <div className="d-flex mb-5" style={{ margin: '0 auto', width: 46 }}>
            <div
              style={{ marginTop: 2, marginRight: 7 }}
              onClick={() => {
                if (el.sizes[1].M !== sizeM) {
                  setSizeMChange(false);
                } else {
                  setSizeMChange(true);
                }
                sizeM === 'Yes' ? setSizeM('No') : setSizeM('Yes');
              }}
              className="squaredOne1">
              <div style={sizeM === 'Yes' ? {} : { display: 'none' }} className="squaredTwo"></div>
            </div>
            <div>M</div>
          </div>
          <div className="d-flex mb-5" style={{ margin: '0 auto', width: 46 }}>
            <div
              style={{ marginTop: 2, marginRight: 7 }}
              onClick={() => {
                if (el.sizes[2].L !== sizeL) {
                  setSizeLChange(false);
                } else {
                  setSizeLChange(true);
                }
                sizeL === 'Yes' ? setSizeL('No') : setSizeL('Yes');
              }}
              className="squaredOne1">
              <div style={sizeL === 'Yes' ? {} : { display: 'none' }} className="squaredTwo"></div>
            </div>
            <div>L</div>
          </div>
          <div className="d-flex mb-5" style={{ margin: '0 auto', width: 46 }}>
            <div
              style={{ marginTop: 2, marginRight: 7 }}
              onClick={() => {
                if (el.sizes[3].XL !== sizeXL) {
                  setSizeXLChange(false);
                } else {
                  setSizeXLChange(true);
                }
                sizeXL === 'Yes' ? setSizeXL('No') : setSizeXL('Yes');
              }}
              className="squaredOne1">
              <div style={sizeXL === 'Yes' ? {} : { display: 'none' }} className="squaredTwo"></div>
            </div>
            <div>XL</div>
          </div>
        </div>
      </td>
      <td>{el.color}</td>
      {/* <td>{el.gender === 'male' ? 'М' : 'Ж'}</td>
      <td>{el.age === 'old' ? 'Взрослый' : 'Детский'}</td> */}

      <td>{el.views}</td>
      <td>
        <div style={{ paddingRight: 15, paddingLeft: 15 }}>
          <div
            onClick={postSaveItem}
            className="mb-30 mt-10 cu-p saveItemControl"
            style={changeAnyone ? {} : { pointerEvents: 'none' }}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5 0C6.04377 0 0 6.04377 0 13.5C0 20.9562 6.04377 27 13.5 27C20.9554 27 27 20.9554 27 13.5C27 6.04377 20.9554 0 13.5 0ZM13.5 25.3125C6.97615 25.3125 1.68753 20.0238 1.68753 13.5C1.68753 6.97615 6.97615 1.68753 13.5 1.68753C20.0238 1.68753 25.3125 6.97615 25.3125 13.5C25.3125 20.0238 20.0238 25.3125 13.5 25.3125Z"
                fill="black"
              />
              <path
                d="M19.6595 8.76902L10.979 17.3719L7.36693 13.8315C7.03449 13.5016 6.49451 13.5016 6.16207 13.8315C5.82879 14.1614 5.82879 14.6955 6.16207 15.0246L10.3799 19.1581C10.7258 19.4627 11.2431 19.4964 11.5848 19.1581L20.8652 9.9621C21.1976 9.63302 21.1976 9.0981 20.8652 8.76902C20.532 8.43995 19.9928 8.43995 19.6595 8.76902Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="cu-p deleteItemControl">
            <svg
              width="22"
              height="22"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5 27C20.944 27 27 20.944 27 13.5C27 6.05601 20.944 0 13.5 0C6.05601 0 0 6.05601 0 13.5C0 20.944 6.05601 27 13.5 27ZM13.5 1.92851C19.8804 1.92851 25.0715 7.11955 25.0715 13.5C25.0715 19.8804 19.8804 25.0715 13.5 25.0715C7.11955 25.0715 1.92851 19.8804 1.92851 13.5C1.92851 7.11955 7.11955 1.92851 13.5 1.92851Z"
                fill="black"
              />
              <path
                d="M8.67895 19.2857C8.92573 19.2857 9.17251 19.1916 9.36079 19.0031L19.0036 9.36032C19.3803 8.98356 19.3803 8.37341 19.0036 7.99685C18.627 7.62029 18.0166 7.62009 17.6401 7.99685L7.99732 17.6396C7.62055 18.0164 7.62055 18.6265 7.99732 19.0031C8.1856 19.1916 8.43217 19.2857 8.67895 19.2857Z"
                fill="black"
              />
              <path
                d="M18.3219 19.2858C18.5687 19.2858 18.8153 19.1916 19.0036 19.0032C19.3803 18.6266 19.3803 18.0162 19.0036 17.6397L9.36079 7.99693C8.98403 7.62016 8.37387 7.62016 7.99732 7.99693C7.62076 8.37348 7.62056 8.98384 7.99732 9.3604L17.6401 19.0032C17.8284 19.1916 18.0751 19.2858 18.3219 19.2858Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ControlTableItem;
