import React from 'react';
import axios from 'axios';
import TypeClothes from '../typeClothes';
import Header from '../Header';
import Filters from '../Filters';
import ContentClothes from '../ContentClothes';
import { useParams } from 'react-router';
import '../Filters/Filters.scss';
function CollectionPage() {
  const [loadingClothes, setloadingClothes] = React.useState(false);
  const [nameCol, setnameCol] = React.useState('');
  const [descCol, setdescCol] = React.useState('');
  const [test1, setTest1] = React.useState(false);
  const [genderOpen, setGenderOpen] = React.useState(false);
  const [gender, setGender] = React.useState('male');
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
    axios.get('/getCollection').then((res) => {
      console.log(res.data);
      setClothes(res.data.clothes);
      setnameCol(res.data.name);
      setdescCol(res.data.desc);
      setloadingClothes(false);
    });
  }, []);

  return (
    <div>
      {' '}
      <Header />
      {!loadingClothes && (
        <div style={{ textAlign: 'center', padding: 15, paddingBottom: 30, fontSize: 28 }}>
          {nameCol + ' — ' + descCol}
        </div>
      )}
      <ContentClothes
        typeClothes={typeClothes}
        loadingClothes={loadingClothes}
        sortType={sortType}
        clothes={clothes}
      />
    </div>
  );
}
export default CollectionPage;
