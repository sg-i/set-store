import React from 'react';
import ControlTableItem from '../ControlTableItem/index';
const ControlTableArray = ({ clothes }) => {
  return (
    <div>
      {/* <table className="tableControl">
        <tr>
          <th>Название{clothes[0] && clothes[0].price}</th>
          <th>Фото</th>
          <th>Тип</th>
          <th>Описание</th>
          <th onClick={sortByName}>Цена</th>
          <th>Дизайнер</th>
          <th>Размеры</th>
          <th>Цвет</th>
          <th>Пол</th>
          <th>Возраст</th>
          <th>Views</th>
          <th></th>
        </tr> */}
      {clothes.map((el) => (
        <ControlTableItem el={el} />
      ))}
      {/* </table>{' '} */}
    </div>
  );
};

export default ControlTableArray;
