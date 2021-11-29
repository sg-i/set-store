import axios from 'axios';
import React from 'react';
import BlackButton from '../../BlackButton';
import WhiteButton from '../../WhiteButton';
import ReactLoading from 'react-loading';
import './AddClothesControl.scss';
const AddClothesControl = ({ setSection }) => {
  const [loadingForm, setLoadingForm] = React.useState(false);

  const [sizeS, setSizeS] = React.useState(true);
  const [sizeM, setSizeM] = React.useState(true);
  const [sizeL, setSizeL] = React.useState(true);
  const [sizeXL, setSizeXL] = React.useState(true);

  const [nameItem, setNameItem] = React.useState('');
  const [clothesType, setClothesType] = React.useState('Верхняя одежда');
  const [priceItem, setPriceItem] = React.useState('');
  const [designerItem, setDesignerItem] = React.useState('');
  const [colorItem, setColorItem] = React.useState('');
  const [genderType, setGenderType] = React.useState('Мужской');
  const [ageType, setAgeType] = React.useState('Взрослый');
  const [descriptionItem, setDescriptionItem] = React.useState('');

  const [file, setFile] = React.useState('');
  const [file1, setFile1] = React.useState('');
  function DefaultStates() {
    setSizeS(true);
    setSizeM(true);
    setSizeL(true);
    setSizeXL(true);
    setNameItem('');
    setClothesType('Верхняя одежда');
    setPriceItem('');
    setDesignerItem('');
    setColorItem('');
    setGenderType('Мужской');
    setAgeType('Взрослый');
    setDescriptionItem('');
    setFile('');
    setFile1('');
  }
  setSection('Добавить товар');
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  async function handleUpload(event) {
    console.log(event.target.files[0]);
    let filke = event.target.files[0];
    // console.log(await toBase64(file));
    let sad = await toBase64(filke);
    const base64Response = await fetch(sad);
    let fgh = await base64Response.blob();

    setFile1(URL.createObjectURL(fgh));
    setFile(sad);
  }
  // React.useEffect(() => {
  //   console.log(nameItem);
  // }, [nameItem]);

  function uploadClothes() {
    let addQueestion = window.confirm('Вы уверены, что хотите добавить товар?');
    let base64File = file;
    if (addQueestion) {
      setLoadingForm(true);
      axios
        .post('/addClothes', {
          name: nameItem,
          type: clothesType,
          sizes: [
            {
              S: sizeS ? 'Yes' : 'No',
            },
            {
              M: sizeM ? 'Yes' : 'No',
            },
            {
              L: sizeL ? 'Yes' : 'No',
            },
            {
              XL: sizeXL ? 'Yes' : 'No',
            },
          ],
          price: priceItem,
          designer: designerItem,
          color: colorItem,
          gender: genderType,
          age: ageType,
          description: descriptionItem,
          imgBase64: base64File,
        })
        .then(function (res) {
          setLoadingForm(false);
          DefaultStates();
          alert('Товар добавлен');
          console.log(res);
        })
        .catch(function (error) {
          setLoadingForm(false);
          alert(`Товар не добавлен. Ошибка:${error.response.data.message}`);
          console.log({ error: error.response.data.message });
        });
    }
  }
  return (
    <div className="wrapAddClothes">
      {loadingForm ? (
        <div style={{ padding: '10%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
            <ReactLoading
              style={{ margin: '0 auto', height: '7%', width: '7%' }}
              type={'spinningBubbles'}
              color={'#000000'}
              height={'4%'}
              width={'4%'}
            />
            <h2 style={{ margin: '0 auto', marginTop: 30 }}>Загрузка</h2>
          </div>
        </div>
      ) : (
        <form id="testForm" onSubmit={uploadClothes} enctype="multipart/form-data">
          <div className="d-flex ">
            <div className="leftSideAddControl">
              <div className="d-flex mb-10">
                <div className="labelTextAreaAddClothes">Название:</div>
                <textarea
                  value={nameItem}
                  rows="1"
                  onChange={(e) => setNameItem(e.target.value)}
                  className="textareaAddClothes"
                  type="text"
                />
              </div>
              <div className="d-flex mb-10">
                <div className="labelTextAreaAddClothes">Тип:</div>
                <div>
                  <div className="d-flex">
                    <div
                      style={{ marginTop: 2 }}
                      onClick={() => {
                        setClothesType('Верхняя одежда');
                      }}
                      className="squaredOne1">
                      <div
                        style={clothesType === 'Верхняя одежда' ? {} : { display: 'none' }}
                        className="squaredTwo"></div>
                    </div>
                    <div className="mb-10 mr-30">Верхняя одежда</div>
                  </div>
                  <div className="d-flex">
                    <div
                      style={{ marginTop: 2 }}
                      onClick={() => {
                        setClothesType('Брюки');
                      }}
                      className="squaredOne1">
                      <div
                        style={clothesType === 'Брюки' ? {} : { display: 'none' }}
                        className="squaredTwo"></div>
                    </div>
                    <div className="mb-10 mr-30">Брюки</div>
                  </div>
                  <div className="d-flex">
                    <div
                      style={{ marginTop: 2 }}
                      onClick={() => {
                        setClothesType('Обувь');
                      }}
                      className="squaredOne1">
                      <div
                        style={clothesType === 'Обувь' ? {} : { display: 'none' }}
                        className="squaredTwo"></div>
                    </div>
                    <div className="mb-10 mr-30">Обувь</div>
                  </div>
                  <div className="d-flex">
                    <div
                      style={{ marginTop: 2 }}
                      onClick={() => {
                        setClothesType('Часы');
                      }}
                      className="squaredOne1">
                      <div
                        style={clothesType === 'Часы' ? {} : { display: 'none' }}
                        className="squaredTwo"></div>
                    </div>
                    <div className="mb-10 mr-30">Часы</div>
                  </div>
                </div>
              </div>
              <div className="d-flex mb-10">
                <div className="labelTextAreaAddClothes">Размеры:</div>
                <div className="d-flex">
                  <div style={{ marginRight: 15 }}>
                    <div
                      onClick={() => {
                        setSizeS(!sizeS);
                      }}
                      className="squaredOne1Sizes">
                      <div
                        style={sizeS ? {} : { display: 'none' }}
                        className="squaredTwoSizes"></div>
                    </div>
                    <div style={{ textAlign: 'center', margin: '0 auto' }}>S</div>
                  </div>
                  <div style={{ marginRight: 15 }}>
                    <div
                      onClick={() => {
                        setSizeM(!sizeM);
                      }}
                      className="squaredOne1Sizes">
                      <div
                        style={sizeM ? {} : { display: 'none' }}
                        className="squaredTwoSizes"></div>
                    </div>
                    <div style={{ textAlign: 'center', margin: '0 auto' }}>M</div>
                  </div>
                  <div style={{ marginRight: 15 }}>
                    <div
                      onClick={() => {
                        setSizeL(!sizeL);
                      }}
                      className="squaredOne1Sizes">
                      <div
                        style={sizeL ? {} : { display: 'none' }}
                        className="squaredTwoSizes"></div>
                    </div>
                    <div style={{ textAlign: 'center', margin: '0 auto' }}>L</div>
                  </div>
                  <div style={{ marginRight: 15 }}>
                    <div
                      onClick={() => {
                        setSizeXL(!sizeXL);
                      }}
                      className="squaredOne1Sizes">
                      <div
                        style={sizeXL ? {} : { display: 'none' }}
                        className="squaredTwoSizes"></div>
                    </div>
                    <div style={{ textAlign: 'center', margin: '0 auto' }}>XL</div>
                  </div>
                </div>
              </div>
              <div className="d-flex mb-20">
                <div className="labelTextAreaAddClothes">Цена:</div>
                <textarea
                  value={priceItem}
                  onChange={(e) => setPriceItem(e.target.value)}
                  rows="1"
                  className="textareaAddClothes"
                  type="text"
                />
              </div>
              <div className="d-flex mb-10">
                <div className="labelTextAreaAddClothes">Дизайнер:</div>
                <textarea
                  value={designerItem}
                  onChange={(e) => setDesignerItem(e.target.value)}
                  rows="1"
                  className="textareaAddClothes"
                  type="text"
                />
              </div>

              <div className="d-flex mb-20">
                <div className="labelTextAreaAddClothes">Цвет:</div>
                <textarea
                  value={colorItem}
                  onChange={(e) => setColorItem(e.target.value)}
                  rows="1"
                  className="textareaAddClothes"
                  type="text"
                />
              </div>
              <div className="d-flex mb-10 ">
                <div className="labelTextAreaAddClothes">Пол:</div>
                <div>
                  <div className="d-flex">
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
                    <div className="mb-10 mr-30">Мужской</div>
                  </div>
                  <div className="d-flex">
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
                    <div className="mb-10 mr-30">Женский</div>
                  </div>
                </div>
              </div>
              <div className="d-flex mb-10">
                <div className="labelTextAreaAddClothes">Возраст:</div>
                <div>
                  <div className="d-flex">
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
                    <div className="mb-10 mr-30">Взрослый</div>
                  </div>
                  <div className="d-flex">
                    <div
                      style={{ marginTop: 2 }}
                      onClick={() => {
                        setAgeType('Ребёнок');
                      }}
                      className="squaredOne1">
                      <div
                        style={ageType === 'Ребёнок' ? {} : { display: 'none' }}
                        className="squaredTwo"></div>
                    </div>
                    <div className="mb-5 mr-30">Ребёнок</div>
                  </div>
                </div>
              </div>
              <div className="d-flex mb-10">
                <div className="labelTextAreaAddClothes">Описание:</div>
                <textarea
                  value={descriptionItem}
                  onChange={(e) => setDescriptionItem(e.target.value)}
                  style={{ border: '1px solid black', resize: 'vertical', borderRadius: 10 }}
                  rows="8"
                  placeholder="Введите данные"
                  className="textareaAddClothes"
                  type="text"
                />
              </div>
            </div>
            <div className="rightSideAddControl">
              <div
                style={{
                  border: '1px solid rgba(145, 145, 145, 0.78)',
                  width: 355,
                  height: 425,
                  margin: '0 auto',
                }}>
                {file1 && (
                  <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={file1} />
                )}
              </div>
              <div
                style={{ width: 'fit-content', margin: '0 auto', marginBottom: 70, marginTop: 20 }}>
                <input
                  accept="image/*"
                  onChange={handleUpload}
                  id="file-input"
                  type="file"
                  className="inputWhityButtonAdd"
                />
                <label className="whiteButtonAddClothes" for="file-input">
                  Выберите файл
                </label>
              </div>
              <div onClick={uploadClothes} style={{ width: 'fit-content', margin: '0 auto' }}>
                <BlackButton title="Сохранить" />
              </div>
            </div>
          </div>{' '}
        </form>
      )}
    </div>
  );
};

export default AddClothesControl;
