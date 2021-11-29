import axios from 'axios';
import React from 'react';
import './ControlTableCollection.scss';
import ControlTableItem from './ControlTableItemCollection';
const ControlTableCollection = ({
  addedItems,
  setAddedItems,
  ageType,
  typeClothes,
  genderType,
  searchText,
}) => {
  const ruCollator = new Intl.Collator('ru-RU');
  const [loadingClothes, SetLoadingClothes] = React.useState(false);
  const [clothes, setClothes] = React.useState([]);
  function updateClothesItems() {
    console.log('was changed');
    axios
      .get('/controlAllItem', {
        params: {
          search: searchText,
          ageType: ageType === 'Взрослый' ? 'old' : 'kids',
          typeClothes: typeClothes,
          genderType: genderType === 'Мужской' ? 'male' : 'female',
        },
      })
      .then(function (res) {
        setClothes(res.data.sort((a, b) => ruCollator.compare(a.name, b.name)));
        SetLoadingClothes(true);
      });
  }
  React.useEffect(() => {
    updateClothesItems();
  }, [typeClothes, genderType, ageType, searchText]);
  // React.useEffect(() => {
  //   console.log(clothes);
  // }, [clothes]);
  //Сортировки table

  const [sortName, setSortName] = React.useState(true);
  const [sortType, setSortType] = React.useState(false);
  const [sortPrice, setSortPrice] = React.useState(false);
  const [sortColor, setSortColor] = React.useState(false);
  const [sortViews, setSortViews] = React.useState(false);
  const sortByName = () => {
    sortName
      ? setClothes([...clothes].sort((a, b) => ruCollator.compare(b.name, a.name)))
      : setClothes([...clothes].sort((a, b) => ruCollator.compare(a.name, b.name)));
    setSortName(!sortName);
    setSortPrice(false);
    setSortType(false);
    setSortViews(false);
    setSortColor(false);
  };
  const sortByType = () => {
    sortType
      ? setClothes([...clothes].sort((a, b) => ruCollator.compare(b.type, a.type)))
      : setClothes([...clothes].sort((a, b) => ruCollator.compare(a.type, b.type)));
    setSortType(!sortType);
    setSortName(false);
    setSortPrice(false);
    setSortViews(false);
    setSortColor(false);
  };
  const sortByPrice = () => {
    sortPrice
      ? setClothes([...clothes].sort((a, b) => (a.price > b.price ? 1 : -1)))
      : setClothes([...clothes].sort((a, b) => (a.price < b.price ? 1 : -1)));
    setSortPrice(!sortPrice);
    setSortName(false);
    setSortType(false);
    setSortViews(false);
    setSortColor(false);
  };
  const sortByColor = () => {
    sortColor
      ? setClothes([...clothes].sort((a, b) => ruCollator.compare(b.color, a.color)))
      : setClothes([...clothes].sort((a, b) => ruCollator.compare(a.color, b.color)));
    setSortColor(!sortColor);
    setSortName(false);
    setSortPrice(false);
    setSortType(false);
    setSortViews(false);
  };
  const sortByViews = () => {
    sortViews
      ? setClothes([...clothes].sort((a, b) => (a.views > b.views ? 1 : -1)))
      : setClothes([...clothes].sort((a, b) => (a.views < b.views ? 1 : -1)));
    setSortViews(!sortViews);
    setSortName(false);
    setSortPrice(false);
    setSortType(false);
    setSortColor(false);
  };
  return (
    <div>
      <table className="tableControl">
        <tr>
          <th className=" align-center cu-p" onClick={sortByName}>
            Название
            <svg
              style={{ marginTop: 2, marginLeft: 2 }}
              height="13"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 15.993 15.993">
              <g>
                <path
                  d="M12.703,4.285l-4-3.992c-0.391-0.39-1.022-0.39-1.413,0l-4,3.992l1.413,1.416l2.294-2.289v12.581h2V3.412l2.293,2.289
		L12.703,4.285z"
                />
              </g>
            </svg>
          </th>
          <th>Фото</th>
          <th className=" align-center  cu-p" onClick={sortByType}>
            Тип
            <svg
              style={{ marginTop: 2, marginLeft: 2 }}
              height="13"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 15.993 15.993">
              <g>
                <path
                  d="M12.703,4.285l-4-3.992c-0.391-0.39-1.022-0.39-1.413,0l-4,3.992l1.413,1.416l2.294-2.289v12.581h2V3.412l2.293,2.289
		L12.703,4.285z"
                />
              </g>
            </svg>
          </th>

          <th className=" align-center  cu-p" onClick={sortByPrice}>
            Цена
            <svg
              style={{ marginTop: 2, marginLeft: 2 }}
              height="13"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 15.993 15.993">
              <g>
                <path
                  d="M12.703,4.285l-4-3.992c-0.391-0.39-1.022-0.39-1.413,0l-4,3.992l1.413,1.416l2.294-2.289v12.581h2V3.412l2.293,2.289
		L12.703,4.285z"
                />
              </g>
            </svg>
          </th>
          <th>Дизайнер</th>
        </tr>
        {clothes.map((el) => (
          <ControlTableItem
            addedItems={addedItems}
            setAddedItems={setAddedItems}
            updateClothesItems={updateClothesItems}
            loadingClothes={loadingClothes}
            clothes={clothes}
            el={el}
          />
        ))}
      </table>{' '}
    </div>
  );
};

export default ControlTableCollection;
