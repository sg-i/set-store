import React from 'react';
import TypeClothes from '../typeClothes';
import CreateCollectionControlSearch from '../CreateCollectionControlSearch';
import ControlTableCollection from '../Control/ControlTableCollection';
import AddCollectionRightSide from '../Control/ControlTableCollection/AddCollectionRightSide';
const CreateCollectionPage = ({
  setSection,
  setGenderType,
  setAgeType,

  setSearchText,
  setTypeClothes,
  ageType,
  searchText,

  typeClothes,
  genderType,
}) => {
  const [addedItems, setAddedItems] = React.useState([]);
  React.useEffect(() => {
    console.log(addedItems);
  }, [addedItems]);
  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <div style={{ padding: 10, paddingTop: 0 }}>
          <TypeClothes
            search={false}
            searchText={searchText}
            setSearchText={setSearchText}
            typeClothes={typeClothes}
            setTypeClothes={setTypeClothes}
          />
          <div className="d-flex">
            {' '}
            <div
              style={{ margin: '15px', marginBottom: -5, marginLeft: 25 }}
              className=" align-center">
              <div className="d-flex">
                {' '}
                <div
                  style={{ marginTop: 2 }}
                  onClick={() => {
                    setGenderType('Мужской');
                  }}
                  className="squaredOne1">
                  <div
                    style={genderType === 'Мужской' ? {} : { display: 'none' }}
                    className="squaredTwo"></div>
                </div>
                <div className="mb-20 mr-30">Мужской</div>
                <div
                  style={{ marginTop: 2 }}
                  onClick={() => {
                    setAgeType('Взрослый');
                  }}
                  className="squaredOne1">
                  <div
                    style={ageType === 'Взрослый' ? {} : { display: 'none' }}
                    className="squaredTwo"></div>
                </div>
                <div className="mb-20 mr-20">Взрослый</div>
              </div>
              <div className="d-flex">
                {' '}
                <div
                  style={{ marginTop: 2 }}
                  onClick={() => {
                    setGenderType('Женский');
                  }}
                  className="squaredOne1">
                  <div
                    style={genderType === 'Женский' ? {} : { display: 'none' }}
                    className="squaredTwo"></div>
                </div>
                <div className="mb-20 mr-30">Женский</div>
                <div
                  style={{ marginTop: 2 }}
                  onClick={() => {
                    setAgeType('Детский');
                  }}
                  className="squaredOne1">
                  <div
                    style={ageType === 'Детский' ? {} : { display: 'none' }}
                    className="squaredTwo"></div>
                </div>
                <div className="mb-20 mr-20">Детский</div>
              </div>
            </div>
            <div className="d-flex">
              {' '}
              <CreateCollectionControlSearch
                setSection={setSection}
                setSearchText={setSearchText}
                typeClothes={typeClothes}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div style={{ width: '50%' }}>
          {' '}
          <ControlTableCollection
            addedItems={addedItems}
            setAddedItems={setAddedItems}
            ageType={ageType}
            searchText={searchText}
            setSearchText={setSearchText}
            typeClothes={typeClothes}
            genderType={genderType}
          />
        </div>
        <div style={{ width: '50%' }}>
          {' '}
          <AddCollectionRightSide setAddedItems={setAddedItems} addedItems={addedItems} />
        </div>
      </div>
    </div>
  );
};

export default CreateCollectionPage;
