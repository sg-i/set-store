import React from 'react';
import axios from 'axios';
import ControlHeader from './ControlHeader';
import Filters from '../Filters';
import TypeClothes from '../typeClothes';
import '../Filters/Filters.scss';
import { Redirect, Route } from 'react-router';
import ControlTable from './ControlTable/index';
import AddClothesControl from './AddClothesControl';
import CreateCollectionControlSearch from '../CreateCollectionControlSearch';
import ControlTableCollection from './ControlTableCollection';
import AddCollectionRightSide from './ControlTableCollection/AddCollectionRightSide';
import CreateCollectionPage from '../CreateCollectionPage';
let test2 = '';
function ControlPage() {
  const [typeClothes, setTypeClothes] = React.useState('all');
  const [section, setSection] = React.useState('Список товаров');
  const [genderType, setGenderType] = React.useState('Мужской');
  const [ageType, setAgeType] = React.useState('Взрослый');
  const [authState, setAuthState] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  function createMarkup(html) {
    return { __html: html };
  }

  React.useEffect(() => {
    axios.get('/checkAuth').then(function (res) {
      console.log('/control');
      console.log(res.data.authenticated);
      setAuthState(res.data.authenticated);
      setLoading(true);
    });
  }, []);

  return (
    <div>
      {loading &&
        (authState ? (
          <div>
            <div style={{ padding: 10, paddingBottom: 0 }}>
              <ControlHeader
                setAuthState={setAuthState}
                section={section}
                setSection={setSection}
              />
            </div>
            <Route path="/control" exact>
              <Redirect to="/control/list" />
            </Route>
            <Route path="/control/list">
              <div style={{ padding: 10, paddingTop: 0 }}>
                <TypeClothes
                  searchText={searchText}
                  setSearchText={setSearchText}
                  typeClothes={typeClothes}
                  setTypeClothes={setTypeClothes}
                />
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
              </div>

              <ControlTable
                ageType={ageType}
                searchText={searchText}
                setSearchText={setSearchText}
                typeClothes={typeClothes}
                genderType={genderType}
              />
            </Route>
            <Route path="/control/add">
              <AddClothesControl setSection={setSection} />
            </Route>
            <Route path="/control/createcollection">
              <CreateCollectionPage
                setSection={setSection}
                setGenderType={setGenderType}
                ageType={ageType}
                searchText={searchText}
                setSearchText={setSearchText}
                typeClothes={typeClothes}
                genderType={genderType}
                setAgeType={setAgeType}
                setTypeClothes={setTypeClothes}
              />{' '}
            </Route>
          </div>
        ) : (
          <div>
            <Redirect to="/login" />
          </div>
        ))}
    </div>
  );
  // if (authState) {
  //   console.log(authState);
  //   return (
  //     <div style={{ padding: 10 }}>
  //       <ControlHeader setAuthState={setAuthState} section={section} setSection={setSection} />
  //       <TypeClothes typeClothes={typeClothes} setTypeClothes={setTypeClothes} />
  //       <div style={{ margin: '15px', marginBottom: -5, marginLeft: 25 }} className=" align-center">
  //         <div className="d-flex">
  //           {' '}
  //           <div
  //             style={{ marginTop: 2 }}
  //             onClick={() => {
  //               setGenderType('Мужской');
  //             }}
  //             className="squaredOne1">
  //             <div
  //               style={genderType === 'Мужской' ? {} : { display: 'none' }}
  //               className="squaredTwo"></div>
  //           </div>
  //           <div className="mb-20 mr-30">Мужской</div>
  //           <div
  //             style={{ marginTop: 2 }}
  //             onClick={() => {
  //               setAgeType('Взрослый');
  //             }}
  //             className="squaredOne1">
  //             <div
  //               style={ageType === 'Взрослый' ? {} : { display: 'none' }}
  //               className="squaredTwo"></div>
  //           </div>
  //           <div className="mb-20 mr-20">Взрослый</div>
  //         </div>
  //         <div className="d-flex">
  //           {' '}
  //           <div
  //             style={{ marginTop: 2 }}
  //             onClick={() => {
  //               setGenderType('Женский');
  //             }}
  //             className="squaredOne1">
  //             <div
  //               style={genderType === 'Женский' ? {} : { display: 'none' }}
  //               className="squaredTwo"></div>
  //           </div>
  //           <div className="mb-20 mr-30">Женский</div>
  //           <div
  //             style={{ marginTop: 2 }}
  //             onClick={() => {
  //               setAgeType('Детский');
  //             }}
  //             className="squaredOne1">
  //             <div
  //               style={ageType === 'Детский' ? {} : { display: 'none' }}
  //               className="squaredTwo"></div>
  //           </div>
  //           <div className="mb-20 mr-20">Детский</div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   console.log(authState);
  //   // return <Redirect to="login" />;
  //   return <div>not aut</div>;
  // }
  // if (loading) {
  //   if (authState) {
  //     console.log(authState);
  //     return (
  //       <div style={{ padding: 10 }}>
  //         <ControlHeader setAuthState={setAuthState} section={section} setSection={setSection} />
  //         <TypeClothes typeClothes={typeClothes} setTypeClothes={setTypeClothes} />
  //         <div
  //           style={{ margin: '15px', marginBottom: -5, marginLeft: 25 }}
  //           className=" align-center">
  //           <div className="d-flex">
  //             {' '}
  //             <div
  //               style={{ marginTop: 2 }}
  //               onClick={() => {
  //                 setGenderType('Мужской');
  //               }}
  //               className="squaredOne1">
  //               <div
  //                 style={genderType === 'Мужской' ? {} : { display: 'none' }}
  //                 className="squaredTwo"></div>
  //             </div>
  //             <div className="mb-20 mr-30">Мужской</div>
  //             <div
  //               style={{ marginTop: 2 }}
  //               onClick={() => {
  //                 setAgeType('Взрослый');
  //               }}
  //               className="squaredOne1">
  //               <div
  //                 style={ageType === 'Взрослый' ? {} : { display: 'none' }}
  //                 className="squaredTwo"></div>
  //             </div>
  //             <div className="mb-20 mr-20">Взрослый</div>
  //           </div>
  //           <div className="d-flex">
  //             {' '}
  //             <div
  //               style={{ marginTop: 2 }}
  //               onClick={() => {
  //                 setGenderType('Женский');
  //               }}
  //               className="squaredOne1">
  //               <div
  //                 style={genderType === 'Женский' ? {} : { display: 'none' }}
  //                 className="squaredTwo"></div>
  //             </div>
  //             <div className="mb-20 mr-30">Женский</div>
  //             <div
  //               style={{ marginTop: 2 }}
  //               onClick={() => {
  //                 setAgeType('Детский');
  //               }}
  //               className="squaredOne1">
  //               <div
  //                 style={ageType === 'Детский' ? {} : { display: 'none' }}
  //                 className="squaredTwo"></div>
  //             </div>
  //             <div className="mb-20 mr-20">Детский</div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     console.log(authState);
  //     return <Redirect to="login" />;
  //   }
  // } else {
  //   console.log('loadingreturn');
  //   return <div>loading</div>;
  // }
}
export default ControlPage;
