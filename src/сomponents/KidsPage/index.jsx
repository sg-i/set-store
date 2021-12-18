import React from 'react';
import axios from 'axios';
import TypeClothes from '../typeClothes';
import Header from '../Header';
import Filters from '../Filters';
import ContentClothes from '../ContentClothes';
import { useParams } from 'react-router';
import '../Filters/Filters.scss';
function KidsPage() {
  const [loadingClothes, setloadingClothes] = React.useState(false);

  const [test1, setTest1] = React.useState(false);
  const [genderOpen, setGenderOpen] = React.useState(false);
  const [gender, setGender] = React.useState('all');
  const [searchText, setSearchText] = React.useState('');

  //Price Types
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);

  //Type
  const [typeClothes, setTypeClothes] = React.useState('all');
  const [clothes, setClothes] = React.useState([]);
  const [designers, setDesigners] = React.useState([]);
  const [colors, setColors] = React.useState([]);
  const [sortType, setSortType] = React.useState('По популярности');
  const [filters, setFilters] = React.useState({
    search: '',
    type: 'all',
    designer: 'None',
    sizeAll: 'Yes',
    sizeS: 'No',
    sizeM: 'No',
    sizeL: 'No',
    sizeXL: 'No',
    color: 'None',
    priceMin: '0',
    priceMax: '10000000',
  });
  const firstUpdate = React.useRef(true);
  const testPar = useParams();

  console.log(testPar);
  React.useEffect(() => {
    setloadingClothes(true);

    window.scrollTo(0, 0);
    console.log('first zapros');
    // for (let i = 0; i < filters.designer.length; i++) {
    //   filters.designer[i] = filters.designer[i].replace('+', '%2B');
    // }

    axios
      .get(`/clothes`, {
        params: {
          search: filters.search,
          age: 'kids',
          gender: gender,
          type: filters.type,
          des: filters.designer,
          sizeAll: filters.sizeAll,
          sizeS: filters.sizeS,
          sizeM: filters.sizeM,
          sizeL: filters.sizeL,
          sizeXL: filters.sizeXL,
          color: filters.color,
          priceMin: filters.priceMin,
          priceMax: filters.priceMax,
        },
      })
      .then((res) => {
        setMinPrice(res.data.minPrice);
        setMaxPrice(res.data.maxPrice);
        setColors(res.data.colors);
        setDesigners(res.data.designers);
        setClothes(res.data.clothes);
        if (firstUpdate.current) {
          firstUpdate.current = false;
          console.log('ddsdf');
          console.log(firstUpdate);
          setTest1(true);
        }
        setloadingClothes(false);
      })
      .catch((err) => console.log(err));
    // return () => {
    //   setClothes([]);
    // };
  }, []);

  React.useEffect(() => {
    setloadingClothes(true);

    console.log(firstUpdate);
    if (!firstUpdate.current) {
      console.log('фильтр ченж ');
      console.log(filters);
      // let neArryad = [];
      // if (filters.designer !== 'None') {
      //   for (let i = 0; i < filters.designer.length; i++) {
      //     // neArryad.push(filters.designer[i].replace('+', '%2B'));
      //     neArryad.push(filters.designer[i].replace('+', '%2B'));

      //   }
      // } else {
      //   neArryad = 'None';
      // }
      // console.log(neArryad);
      axios
        .get(`/clothes`, {
          params: {
            search: filters.search,
            age: 'kids',
            gender: gender,
            type: typeClothes,
            des: filters.designer,
            sizeAll: filters.sizeAll,
            sizeS: filters.sizeS,
            sizeM: filters.sizeM,
            sizeL: filters.sizeL,
            sizeXL: filters.sizeXL,
            color: filters.color,
            priceMin: filters.priceMin,
            priceMax: filters.priceMax,
          },
        })
        .then((res) => {
          console.log(res.data.clothes);

          setClothes(res.data.clothes);
          setloadingClothes(false);
        })
        .catch((err) => console.log(err));
    }
  }, [filters, gender]);

  React.useEffect(() => {
    setloadingClothes(true);

    console.log('thirst zapros');
    firstUpdate.current = true;
    axios
      .get(`/clothes`, {
        params: {
          search: '',
          age: 'kids',
          gender: gender,
          type: typeClothes,
          des: filters.designer,
          sizeAll: filters.sizeAll,
          sizeS: filters.sizeS,
          sizeM: filters.sizeM,
          sizeL: filters.sizeL,
          sizeXL: filters.sizeXL,
          color: filters.color,
          priceMin: 0,
          priceMax: 100000000,
        },
      })
      .then((res) => {
        setMinPrice(res.data.minPrice);
        setMaxPrice(res.data.maxPrice);
        setColors(res.data.colors);
        setDesigners(res.data.designers);
        setClothes(res.data.clothes);
        if (firstUpdate.current) {
          firstUpdate.current = false;
          console.log('ddsdf');
          console.log(firstUpdate);
        }
        setloadingClothes(false);
      })
      .catch((err) => console.log(err));
    // return () => {
    //   setClothes([]);
    // };
  }, [typeClothes, gender]);
  const [filtopenWrap, setfiltopenWrap] = React.useState(false);
  return (
    <div>
      {' '}
      <Header />
      <TypeClothes
        search={true}
        searchText={searchText}
        setSearchText={setSearchText}
        typeClothes={typeClothes}
        setTypeClothes={setTypeClothes}
      />
      <div style={{ padding: '30px', paddingRight: 0 }} className="d-flex">
        <div>
          <Filters
            searchText={searchText}
            setSearchText={setSearchText}
            setSortType={setSortType}
            sortType={sortType}
            typeClothes={typeClothes}
            setFilters={setFilters}
            colors={colors}
            setColors={setColors}
            designers={designers}
            setDesigners={setDesigners}
            clothes={clothes}
            setClothes={setClothes}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
          <div>
            {/* строка */}
            <div
              onClick={() => {
                setGenderOpen(!genderOpen);
              }}
              className="filterItem d-flex justify-between align-center">
              <p>Пол</p>
              <svg
                style={
                  genderOpen
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
                genderOpen
                  ? { opacity: '1', transition: 'opacity 0.2s ease-in-out' }
                  : { opacity: '0', transition: 'opacity 0.2s ease-in-out' }
              }
              className=" d-flex align-center">
              <div
                style={
                  genderOpen
                    ? { width: '200px', transition: 'width 0.8s ease-in-out' }
                    : { width: '0px', transition: 'width 0.8s ease-in-out' }
                }
                className="testhr1"></div>
              <div
                style={
                  genderOpen
                    ? { width: '100%', transition: 'width 0.4s ease-in-out' }
                    : { width: '0px', transition: 'width 0.8s ease-in-out' }
                }
                className="testhr2"></div>
            </div>
            {/*sort */}
            <div style={genderOpen ? {} : { display: 'none' }}>
              {['all', 'male', 'female'].map((el) => (
                <div
                  style={{ margin: '15px', marginBottom: -5, marginLeft: 10 }}
                  className="d-flex align-center">
                  <div
                    onClick={() => {
                      setGender(el);
                    }}
                    className="squaredOne1">
                    <div
                      style={gender === el ? {} : { display: 'none' }}
                      className="squaredTwo"></div>
                  </div>
                  <div>{el === 'all' ? 'Любой' : el === 'male' ? 'Мальчик' : 'Девочка'}</div>
                </div>
              ))}{' '}
            </div>
          </div>
        </div>
        <ContentClothes
          filtopenWrap={filtopenWrap}
          loadingClothes={loadingClothes}
          sortType={sortType}
          clothes={clothes}
        />
      </div>
    </div>
  );
}
export default KidsPage;
