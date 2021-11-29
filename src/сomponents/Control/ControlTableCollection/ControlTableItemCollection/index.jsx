import axios from 'axios';
import React from 'react';
import '../ControlTableCollection.scss';
const ControlTableItemCollection = ({
  addedItems,
  setAddedItems,
  updateClothesItems,
  el,
  clothes,
  loadingClothes,
}) => {
  const [type, setType] = React.useState('No');

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
    setChangeAnyone(false);
    setNameTableStateChange(false);
    setDescriptionTableStateChange(false);
    setPriceTableStateChange(false);
    setDesignerTableStateChange(false);

    setNameTableState(el.name);
    setDescriptionTableState(el.description);
    setPriceTableState(el.price);
    setDesignerTableState(el.designer);
    // console.log(el);
  }, [clothes]);

  function clickItem() {
    console.log(addedItems.some((item) => item.id === el._id));
    if (!addedItems.some((item) => item.id === el._id)) {
      setAddedItems([...addedItems, { id: el._id, name: el.name }]);
    } else {
      setAddedItems(addedItems.filter((elem) => elem.id != el._id));
    }
  }
  return (
    <tr onClick={clickItem} className="itemCollectionAdd">
      <td>{nameTableState}</td>
      <td>
        <img className="imgTable" src={el.imageUrl} alt="" />
      </td>
      <td>{type}</td>

      <td>{priceTableState}</td>
      <td>{designerTableState}</td>
    </tr>
  );
};

export default ControlTableItemCollection;
