import axios from 'axios';
import React from 'react';
import BlackButton from '../../../BlackButton';
import WhiteButton from '../../../WhiteButton';
import ReactLoading from 'react-loading';
import './AddCollectionRightSide.scss';
const AddCollectionRightSide = ({ addedItems, setAddedItems }) => {
  const [loadingForm, setLoadingForm] = React.useState(false);

  const [nameItem, setNameItem] = React.useState('');
  const [clothesType, setClothesType] = React.useState('Верхняя одежда');

  const [descriptionItem, setDescriptionItem] = React.useState('');

  function DefaultStates() {
    setNameItem('');
    setClothesType('Верхняя одежда');
    setAddedItems([]);
    setDescriptionItem('');
  }

  // React.useEffect(() => {
  //   console.log(nameItem);
  // }, [nameItem]);

  function uploadClothes() {
    let addQueestion = window.confirm('Вы уверены, что хотите добавить товар?');

    if (addQueestion) {
      setLoadingForm(true);
      const arrayMiddle = addedItems.map((el) => el.id);
      console.log(arrayMiddle);
      axios
        .post('/createCollection', {
          name: nameItem,
          description: descriptionItem,
          items: arrayMiddle,
          // items: ['sad', 'dsa'],
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
  function clickItem(el) {
    setAddedItems(addedItems.filter((elem) => elem.id != el.id));
  }
  return (
    <div className="wrapAddClothesCollection">
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
        <form id="testFormCollection" onSubmit={uploadClothes}>
          <div className="d-flex ">
            <div className="leftSideAddControlCollection">
              <div className="d-flex mb-30">
                <div className="labelTextAreaAddClothesCollection">Название:</div>
                <textarea
                  value={nameItem}
                  rows="1"
                  onChange={(e) => setNameItem(e.target.value)}
                  className="textareaAddClothesCollection"
                  type="text"
                />
              </div>

              <div className="d-flex mb-10">
                <div className="labelTextAreaAddClothesCollection">Описание:</div>
                <textarea
                  value={descriptionItem}
                  onChange={(e) => setDescriptionItem(e.target.value)}
                  style={{ border: '1px solid black', resize: 'vertical', borderRadius: 10 }}
                  rows="3"
                  placeholder="Введите данные"
                  className="textareaAddClothesCollection"
                  type="text"
                />
              </div>
              <div className="d-flex mb-30">
                <div className="labelTextAreaAddClothesCollection">Товары:</div>
                <div className="d-flex flex-column" style={{ width: '100%' }}>
                  {' '}
                  {addedItems.map((elem) => (
                    <div className="d-flex">
                      {' '}
                      <div
                        style={{ textAlign: 'center' }}
                        className="textareaAddClothesCollection mb-15">
                        {elem.name}
                      </div>
                      <svg
                        className="cu-p"
                        onClick={() => clickItem(elem)}
                        style={{ marginTop: 8, marginLeft: 8 }}
                        width="20"
                        height="20"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14 28C21.7197 28 28 21.7197 28 14C28 6.2803 21.7197 0 14 0C6.2803 0 0 6.2803 0 14C0 21.7197 6.2803 28 14 28ZM14 1.99994C20.6168 1.99994 26.0001 7.38324 26.0001 14C26.0001 20.6168 20.6168 26.0001 14 26.0001C7.38324 26.0001 1.99994 20.6168 1.99994 14C1.99994 7.38324 7.38324 1.99994 14 1.99994Z"
                          fill="black"
                        />
                        <path
                          d="M8.99996 19.9999C9.25588 19.9999 9.5118 19.9023 9.70705 19.7068L19.707 9.70693C20.0977 9.31621 20.0977 8.68346 19.707 8.29296C19.3165 7.90245 18.6835 7.90224 18.293 8.29296L8.29308 18.2929C7.90236 18.6836 7.90236 19.3163 8.29308 19.7068C8.48833 19.9023 8.74404 19.9999 8.99996 19.9999Z"
                          fill="black"
                        />
                        <path
                          d="M19.0001 20C19.256 20 19.5117 19.9024 19.707 19.7069C20.0977 19.3164 20.0977 18.6834 19.707 18.2929L9.70705 8.29304C9.31633 7.90232 8.68358 7.90232 8.29308 8.29304C7.90258 8.68354 7.90236 9.3165 8.29308 9.70701L18.293 19.7069C18.4882 19.9024 18.7442 20 19.0001 20Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>{' '}
          <div onClick={uploadClothes} style={{ width: 'fit-content', margin: '0 auto' }}>
            <BlackButton title="Сохранить" />
          </div>
        </form>
      )}
    </div>
  );
};

export default AddCollectionRightSide;
