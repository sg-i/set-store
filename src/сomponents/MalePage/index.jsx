import React from 'react';
import axios from 'axios';
import TypeClothes from '../typeClothes';
import Header from '../Header';
import Filters from '../Filters';
import ContentClothes from '../ContentClothes';

function MalePage() {
  const [test1, setTest1] = React.useState(false);

  const [searchText, setSearchText] = React.useState('');

  let gender = 'male';
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
  React.useEffect(() => {
    console.log(clothes);
  }, [clothes]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // for (let i = 0; i < filters.designer.length; i++) {
    //   filters.designer[i] = filters.designer[i].replace('+', '%2B');
    // }

    axios
      .get(
        `/clothes?search=${filters.search}&age=old&gender=male&type=${filters.type}&des=${filters.designer}&sizeAll=${filters.sizeAll}&sizeS=${filters.sizeS}&sizeM=${filters.sizeM}&sizeL=${filters.sizeL}&sizeXL=${filters.sizeXL}&color=${filters.color}&priceMin=${filters.priceMin}&priceMax=${filters.priceMax}`,
      )
      .then((res) => {
        setMinPrice(res.data.minPrice);
        setMaxPrice(res.data.maxPrice);
        setColors(res.data.colors);
        setDesigners(res.data.designers);
        setClothes(res.data.clothes);
        if (firstUpdate.current) {
          firstUpdate.current = false;

          setTest1(true);
        }
      })
      .catch((err) => console.log(err));
    // return () => {
    //   setClothes([]);
    // };
  }, []);

  React.useEffect(() => {
    if (!firstUpdate.current) {
      let neArryad = [];
      if (filters.designer !== 'None') {
        for (let i = 0; i < filters.designer.length; i++) {
          neArryad.push(filters.designer[i].replace('+', '%2B'));
        }
      } else {
        neArryad = 'None';
      }

      axios
        .get(
          `/clothes?search=${filters.search}&age=old&gender=male&type=${typeClothes}&des=${neArryad}&sizeAll=${filters.sizeAll}&sizeS=${filters.sizeS}&sizeM=${filters.sizeM}&sizeL=${filters.sizeL}&sizeXL=${filters.sizeXL}&color=${filters.color}&priceMin=${filters.priceMin}&priceMax=${filters.priceMax}`,
        )
        .then((res) => {
          setClothes(res.data.clothes);
        })
        .catch((err) => console.log(err));
    }
  }, [filters]);

  React.useEffect(() => {
    firstUpdate.current = true;
    axios
      .get(
        `/clothes?search=&age=old&gender=male&type=${typeClothes}&des=${filters.designer}&sizeAll=${
          filters.sizeAll
        }&sizeS=${filters.sizeS}&sizeM=${filters.sizeM}&sizeL=${filters.sizeL}&sizeXL=${
          filters.sizeXL
        }&color=${filters.color}&priceMin=${0}&priceMax=${100000000}`,
        {
          params:
          {
            search: '',
            age='old',
          }
        }
      )
      .then((res) => {
        setMinPrice(res.data.minPrice);
        setMaxPrice(res.data.maxPrice);
        setColors(res.data.colors);
        setDesigners(res.data.designers);
        setClothes(res.data.clothes);
        if (firstUpdate.current) {
          firstUpdate.current = false;
        }
      })
      .catch((err) => console.log(err));
    // return () => {
    //   setClothes([]);
    // };
  }, [typeClothes]);

  React.useEffect(() => {
    console.log(filters);
  }, [filters]);

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
            gender={'male'}
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
        </div>
        <ContentClothes sortType={sortType} clothes={clothes} />
      </div>
    </div>
  );
}
export default MalePage;
