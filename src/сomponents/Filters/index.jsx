import React from 'react';
import { AppContext } from '../../context';
import ColorsFilter from '../ColorsFilter';
import DesignersFilter from '../DesignersFilter';
import SortFilter from '../SortFilter';
import './Filters.scss';

function Filters({
  clothes,
  setClothes,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  designers,
  colors,
  setDesigners,
  setColors,
  setFilters,
  typeClothes,
  sortType,
  setSortType,
  searchText,
}) {
  //Filter Designer
  const [designerOpen, setDesignerOpen] = React.useState(false);

  //Filter Size
  const [sizeOpen, setSizeOpen] = React.useState(false);

  //Filter Color
  const [colorOpen, setColorOpen] = React.useState(false);

  //Filter Price
  const [priceOpen, setPriceOpen] = React.useState(false);

  //Filter Sort
  const [sortOpen, setSortOpen] = React.useState(false);

  //Size Types
  const [sizeS, setSizeS] = React.useState(false);
  const [sizeM, setSizeM] = React.useState(false);
  const [sizeL, setSizeL] = React.useState(false);
  const [sizeXL, setSizeXL] = React.useState(false);

  //Colors Array
  const [colorsAdded, setColorsAdded] = React.useState([]);

  //designers Array
  const [designersAdded, setDesignersAdded] = React.useState([]);

  React.useEffect(() => {
    setFilters({
      search: searchText,
      type: typeClothes,
      designer: designersAdded.length ? designersAdded : 'None',
      sizeAll: sizeS || sizeM || sizeL || sizeXL ? 'No' : 'Yes',
      sizeS: sizeS ? 'Yes' : 'No',
      sizeM: sizeM ? 'Yes' : 'No',
      sizeL: sizeL ? 'Yes' : 'No',
      sizeXL: sizeXL ? 'Yes' : 'No',
      color: colorsAdded.length ? colorsAdded : 'None',
      priceMin: minPrice,
      priceMax: maxPrice,
    });
  }, [designersAdded, colorsAdded, sizeS, sizeM, sizeL, sizeXL, maxPrice, minPrice, searchText]);
  React.useEffect(() => {
    console.log('search');
  }, [searchText]);
  return (
    <div className="filterWrap">
      <div>
        {/* строка */}
        <div
          onClick={() => {
            setDesignerOpen(!designerOpen);
          }}
          className="filterItem d-flex justify-between align-center">
          <p>Дизайнер</p>
          <svg
            style={
              designerOpen
                ? { transform: 'rotate(-180deg)', transition: 'transform 0.2s ease-in-out' }
                : { transform: 'rotate(0)', transition: 'transform 0.2s ease-in-out' }
            }
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path
                d="M6.96502 11.3988C7.2565 11.6903 7.7435 11.6903 8.03573 11.3988L14.7786 4.67325C15.0738 4.37803 15.0738 3.89926 14.7786 3.60478C14.4834 3.30956 14.0038 3.30956 13.7086 3.60478L7.50003 9.79611L1.29219 3.60403C0.996221 3.30881 0.517449 3.30881 0.221478 3.60403C-0.0737441 3.89925 -0.0737441 4.37802 0.221478 4.6725L6.96502 11.3988Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="15"
                  height="15"
                  fill="white"
                  transform="translate(15 15) rotate(-180)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* полоска */}
        <div
          style={
            designerOpen
              ? { opacity: '1', transition: 'opacity 0.2s ease-in-out' }
              : { opacity: '0', transition: 'opacity 0.2s ease-in-out' }
          }
          className=" d-flex align-center">
          <div
            style={
              designerOpen
                ? { width: '150px', transition: 'width 0.8s ease-in-out' }
                : { width: '0px', transition: 'width 0.8s ease-in-out' }
            }
            className="testhr1"></div>
          <div
            style={
              designerOpen
                ? { width: '100%', transition: 'width 0.4s ease-in-out' }
                : { width: '0px', transition: 'width 0.8s ease-in-out' }
            }
            className="testhr2"></div>
        </div>

        <div style={designerOpen ? { marginBottom: 10 } : { display: 'none' }}>
          {designers.map((el) => (
            <DesignersFilter
              item={el}
              designersAdded={designersAdded}
              setDesignersAdded={setDesignersAdded}
            />
          ))}{' '}
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            setSizeOpen(!sizeOpen);
          }}
          className="filterItem d-flex justify-between align-center">
          <p>Размер</p>
          <svg
            style={
              sizeOpen
                ? { transform: 'rotate(-180deg)', transition: 'transform 0.2s ease-in-out' }
                : { transform: 'rotate(0)', transition: 'transform 0.2s ease-in-out' }
            }
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path
                d="M6.96502 11.3988C7.2565 11.6903 7.7435 11.6903 8.03573 11.3988L14.7786 4.67325C15.0738 4.37803 15.0738 3.89926 14.7786 3.60478C14.4834 3.30956 14.0038 3.30956 13.7086 3.60478L7.50003 9.79611L1.29219 3.60403C0.996221 3.30881 0.517449 3.30881 0.221478 3.60403C-0.0737441 3.89925 -0.0737441 4.37802 0.221478 4.6725L6.96502 11.3988Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="15"
                  height="15"
                  fill="white"
                  transform="translate(15 15) rotate(-180)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          style={
            sizeOpen
              ? { opacity: '1', transition: 'opacity 0.2s ease-in-out' }
              : { opacity: '0', transition: 'opacity 0.2s ease-in-out' }
          }
          className=" d-flex align-center">
          <div
            style={
              sizeOpen
                ? { width: '115px', transition: 'width 0.8s ease-in-out' }
                : { width: '0px', transition: 'width 0.8s ease-in-out' }
            }
            className="testhr1"></div>
          <div
            style={
              sizeOpen
                ? { width: '100%', transition: 'width 0.4s ease-in-out' }
                : { width: '0px', transition: 'width 0.8s ease-in-out' }
            }
            className="testhr2"></div>
        </div>
        {/* список размеров */}
        <div style={sizeOpen ? {} : { display: 'none' }}>
          <div
            style={{ margin: '15px', marginBottom: -5, marginLeft: 10 }}
            className="d-flex align-center">
            <div
              onClick={() => {
                setSizeS(!sizeS);
              }}
              className="squaredOne1">
              <div style={sizeS ? {} : { display: 'none' }} className="squaredTwo"></div>
            </div>
            <div>S</div>
          </div>
          <div
            style={{ margin: '15px', marginBottom: -5, marginLeft: 10 }}
            className="d-flex align-center">
            <div
              onClick={() => {
                setSizeM(!sizeM);
              }}
              className="squaredOne1">
              <div style={sizeM ? {} : { display: 'none' }} className="squaredTwo"></div>
            </div>
            <div>M</div>
          </div>
          <div
            style={{ margin: '15px', marginBottom: -5, marginLeft: 10 }}
            className="d-flex align-center">
            <div
              onClick={() => {
                setSizeL(!sizeL);
              }}
              className="squaredOne1">
              <div style={sizeL ? {} : { display: 'none' }} className="squaredTwo"></div>
            </div>
            <div>L</div>
          </div>
          <div
            style={{ margin: '15px', marginBottom: 5, marginLeft: 10 }}
            className="d-flex align-center">
            <div
              onClick={() => {
                setSizeXL(!sizeXL);
              }}
              className="squaredOne1">
              <div style={sizeXL ? {} : { display: 'none' }} className="squaredTwo"></div>
            </div>
            <div>XL</div>
          </div>
        </div>
      </div>
      <div>
        {/* строка */}
        <div
          onClick={() => {
            setColorOpen(!colorOpen);
          }}
          className="filterItem d-flex justify-between align-center">
          <p>Цвет</p>
          <svg
            style={
              colorOpen
                ? { transform: 'rotate(-180deg)', transition: 'transform 0.2s ease-in-out' }
                : { transform: 'rotate(0)', transition: 'transform 0.2s ease-in-out' }
            }
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path
                d="M6.96502 11.3988C7.2565 11.6903 7.7435 11.6903 8.03573 11.3988L14.7786 4.67325C15.0738 4.37803 15.0738 3.89926 14.7786 3.60478C14.4834 3.30956 14.0038 3.30956 13.7086 3.60478L7.50003 9.79611L1.29219 3.60403C0.996221 3.30881 0.517449 3.30881 0.221478 3.60403C-0.0737441 3.89925 -0.0737441 4.37802 0.221478 4.6725L6.96502 11.3988Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="15"
                  height="15"
                  fill="white"
                  transform="translate(15 15) rotate(-180)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* полоска */}
        <div
          style={
            colorOpen
              ? { opacity: '1', transition: 'opacity 0.2s ease-in-out' }
              : { opacity: '0', transition: 'opacity 0.2s ease-in-out' }
          }
          className=" d-flex align-center">
          <div
            style={
              colorOpen
                ? { width: '60px', transition: 'width 0.8s ease-in-out' }
                : { width: '0px', transition: 'width 0.8s ease-in-out' }
            }
            className="testhr1"></div>
          <div
            style={
              designerOpen
                ? { width: '100%', transition: 'width 0.4s ease-in-out' }
                : { width: '0px', transition: 'width 0.8s ease-in-out' }
            }
            className="testhr2"></div>
        </div>
        <div style={colorOpen ? { marginBottom: 10 } : { display: 'none' }}>
          {colors.map((el) => (
            <ColorsFilter item={el} colorsAdded={colorsAdded} setColorsAdded={setColorsAdded} />
          ))}{' '}
        </div>
      </div>
      <div>
        {/* строка */}
        <div
          onClick={() => {
            setPriceOpen(!priceOpen);
          }}
          className="filterItem d-flex justify-between align-center">
          <p>Цена</p>
          <svg
            style={
              priceOpen
                ? { transform: 'rotate(-180deg)', transition: 'transform 0.2s ease-in-out' }
                : { transform: 'rotate(0)', transition: 'transform 0.2s ease-in-out' }
            }
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path
                d="M6.96502 11.3988C7.2565 11.6903 7.7435 11.6903 8.03573 11.3988L14.7786 4.67325C15.0738 4.37803 15.0738 3.89926 14.7786 3.60478C14.4834 3.30956 14.0038 3.30956 13.7086 3.60478L7.50003 9.79611L1.29219 3.60403C0.996221 3.30881 0.517449 3.30881 0.221478 3.60403C-0.0737441 3.89925 -0.0737441 4.37802 0.221478 4.6725L6.96502 11.3988Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="15"
                  height="15"
                  fill="white"
                  transform="translate(15 15) rotate(-180)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* полоска */}
        <div
          style={
            priceOpen
              ? { opacity: '1', transition: 'opacity 0.2s ease-in-out' }
              : { opacity: '0', transition: 'opacity 0.2s ease-in-out' }
          }
          className=" d-flex align-center">
          <div
            style={
              priceOpen
                ? { width: '80px', transition: 'width 0.8s ease-in-out' }
                : { width: '0px', transition: 'width 0.8s ease-in-out' }
            }
            className="testhr1"></div>
          <div
            style={
              priceOpen
                ? { width: '100%', transition: 'width 0.4s ease-in-out' }
                : { width: '0px', transition: 'width 0.8s ease-in-out' }
            }
            className="testhr2"></div>
        </div>
        {/*цены */}
        <div
          style={priceOpen ? { marginBottom: 10 } : { display: 'none' }}
          className="d-flex flex-wrap mt-15">
          <div className="d-flex">
            <div>От</div>{' '}
            <div className="supPriceTextField">
              {' '}
              <input
                className="priceTextField"
                onChange={(e) => {
                  setMinPrice(e.target.value);
                }}
                value={minPrice}
                type="text"
              />
              <span className="littRub">₽</span>
            </div>
          </div>
          <div className="d-flex">
            <div>До</div>{' '}
            <div className="supPriceTextField d-flex justify-between">
              <input
                className="priceTextField"
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                }}
                value={maxPrice}
                type="text"
              />
              <span className="littRub">₽</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* строка */}
        <div
          onClick={() => {
            setSortOpen(!sortOpen);
          }}
          className="filterItem d-flex justify-between align-center">
          <p>Сортировать</p>
          <svg
            style={
              sortOpen
                ? { transform: 'rotate(-180deg)', transition: 'transform 0.2s ease-in-out' }
                : { transform: 'rotate(0)', transition: 'transform 0.2s ease-in-out' }
            }
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path
                d="M6.96502 11.3988C7.2565 11.6903 7.7435 11.6903 8.03573 11.3988L14.7786 4.67325C15.0738 4.37803 15.0738 3.89926 14.7786 3.60478C14.4834 3.30956 14.0038 3.30956 13.7086 3.60478L7.50003 9.79611L1.29219 3.60403C0.996221 3.30881 0.517449 3.30881 0.221478 3.60403C-0.0737441 3.89925 -0.0737441 4.37802 0.221478 4.6725L6.96502 11.3988Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="15"
                  height="15"
                  fill="white"
                  transform="translate(15 15) rotate(-180)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* полоска */}
        <div
          style={
            sortOpen
              ? { opacity: '1', transition: 'opacity 0.2s ease-in-out' }
              : { opacity: '0', transition: 'opacity 0.2s ease-in-out' }
          }
          className=" d-flex align-center">
          <div
            style={
              sortOpen
                ? { width: '200px', transition: 'width 0.8s ease-in-out' }
                : { width: '0px', transition: 'width 0.8s ease-in-out' }
            }
            className="testhr1"></div>
          <div
            style={
              sortOpen
                ? { width: '100%', transition: 'width 0.4s ease-in-out' }
                : { width: '0px', transition: 'width 0.8s ease-in-out' }
            }
            className="testhr2"></div>
        </div>
        {/*sort */}
        <div style={sortOpen ? { marginBottom: 10 } : { display: 'none' }}>
          {['По популярности', 'По возрастанию цены', 'По убыванию цены'].map((el) => (
            <SortFilter setSortType={setSortType} sortType={sortType} item={el} />
          ))}{' '}
        </div>
      </div>
    </div>
  );
}
export default Filters;
