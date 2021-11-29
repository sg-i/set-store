import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import './Product.scss';
import WhiteButton from '../WhiteButton';
import Modal from 'react-modal';
import ContentLoader from 'react-content-loader';
import ModalData from './ModalData';

function Product() {
  const [productData, setProductData] = React.useState({});
  const [loadingStatus, setLoadingStatus] = React.useState(false);
  const [sizeWindow, setSizeWindow] = React.useState(false);
  const testPar = useParams();
  const history = useHistory();
  React.useEffect(() => {
    axios
      .get(`/product?id=${testPar._id}`)
      .then((res) => {
        setProductData(res.data);
        setLoadingStatus(true);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const goBack = () => {
    history.goBack();
  };
  const price_d_item = String(productData.price);
  const price = price_d_item.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

  // productData.sizes && console.log(Object.keys(productData.sizes[0]));
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.55)',
    },
    content: {
      padding: '20px',
      zIndex: '3',
      top: '45%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '700px',
      marginRight: '-50%',
      borderRadius: '50px',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
      overflow: 'auto',
    },
  };
  function closeModal() {
    setSizeWindow(false);
  }
  return (
    <div style={{ padding: 40, paddingBottom: 0 }}>
      {
        <div className="wrapProduct">
          <div className="leftSideProduct">
            <div onClick={goBack} className="buttonBack">
              <svg
                style={{ marginRight: 15 }}
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.792892 7.29289C0.402369 7.68342 0.402369 8.31658 0.792892 8.70711L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34315C8.96159 1.95262 8.96159 1.31946 8.57107 0.928932C8.18054 0.538408 7.54738 0.538408 7.15685 0.928932L0.792892 7.29289ZM24 7L1.5 7V9L24 9V7Z"
                  fill="black"
                />
              </svg>
              Назад
            </div>
            {loadingStatus ? (
              <img src={productData.imageUrl} alt="" />
            ) : (
              <ContentLoader
                style={{ display: 'flex', margin: '0 auto' }}
                speed={2}
                width={350}
                height={520}
                viewBox="0 0 350 520"
                backgroundColor="#ededed"
                foregroundColor="#ffffff">
                <rect x="90" y="415" rx="0" ry="0" width="80" height="0" />
                <rect x="26" y="21" rx="68" ry="68" width="299" height="451" />
              </ContentLoader>
            )}
          </div>
          <div className="rightSideProduct">
            {loadingStatus ? (
              <>
                {' '}
                <div className="nameProduct">{productData.name}</div>
                <div className="priceProduct">{price + ' ₽'}</div>
                <div className="descProduct">{productData.description}</div>
                <div onClick={() => setSizeWindow(!sizeWindow)} className="sizeNetButton">
                  РАЗМЕРНАЯ СЕТКА
                </div>
                <Modal
                  onRequestClose={closeModal}
                  isOpen={sizeWindow}
                  style={customStyles}
                  contentLabel="Example Modal">
                  <ModalData
                    type={productData.type}
                    gender={productData.gender}
                    age={productData.age}
                  />
                </Modal>
                <div>
                  <div className="textAvailableSize">Доступные размеры</div>
                  <div className="d-flex">
                    {productData.sizes &&
                      productData.sizes.map(
                        (el) =>
                          // console.log(Object.keys(el));
                          // console.log(Object.values(el));
                          Object.values(el)[0] === 'Yes' && (
                            <div className="sizeItem">
                              <div style={{ margin: '0 auto' }}>{Object.keys(el)[0]}</div>
                            </div>
                          ),
                      )}
                  </div>
                  {/* {productData.sizes && productData.sizes[0]} */}
                </div>
              </>
            ) : (
              <ContentLoader
                speed={5}
                width={550}
                height={520}
                viewBox="0 0 550 520"
                backgroundColor="#ededed"
                foregroundColor="#ffffff">
                <rect x="90" y="415" rx="0" ry="0" width="80" height="0" />
                <rect x="5" y="23" rx="20" ry="20" width="482" height="35" />
                <rect x="5" y="100" rx="20" ry="20" width="79" height="37" />
                <rect x="5" y="180" rx="20" ry="20" width="520" height="88" />
                <rect x="5" y="297" rx="20" ry="20" width="94" height="30" />
                <rect x="5" y="344" rx="20" ry="20" width="138" height="30" />
                <circle cx="27" cy="412" r="22" />
                <circle cx="81" cy="412" r="22" />
                <circle cx="134" cy="412" r="22" />
              </ContentLoader>
            )}
          </div>
        </div>
      }
    </div>
  );
}
export default Product;
{
}
