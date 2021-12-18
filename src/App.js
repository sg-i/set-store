import React from 'react';
import Header from './сomponents/Header';
import BunnerNewCollection from './сomponents/BunnerNewCollection';
import MainPageContent from './сomponents/MainPageContent';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from './context';
import { Redirect } from 'react-router';
import TypeClothes from './сomponents/typeClothes';
import Filters from './сomponents/Filters';
import ContentClothes from './сomponents/ContentClothes';
import Location from './сomponents/Location';
import FemalePage from './сomponents/FemalePage';
import MalePage from './сomponents/MalePage';
import Product from './сomponents/Product';
import AuthPage from './сomponents/Control/AuthPage';
import RegisterPage from './сomponents/Control/RegisterPage';
import LoginSuccessPage from './сomponents/Control/LoginSuccessPage';
import LoginFailurePage from './сomponents/Control/LoginFailurePage';
import ControlPage from './сomponents/Control';
import KidsPage from './сomponents/KidsPage';
import CollectionPage from './сomponents/CollectionPage';
import { isMobile } from 'react-device-detect';
function App() {
  const [isMobileState, setIsMobileState] = React.useState(false);
  React.useEffect(() => {
    setIsMobileState(isMobile);
  }, []);
  if (isMobileState) {
    // document.body.style.width = `${window.screen.availWidth}px`;
    document.body.style.width = `${750}px`;
  }
  React.useEffect(() => {
    console.log(isMobileState);
    console.log(window.screen.availWidth);
    // if (isMobileState) {
    //   // document.body.style.width = `${window.screen.availWidth}px`;
    //   document.body.style.width = `${750}px`;
    // }
  }, [isMobileState]);
  return (
    <div className="clear">
      <AppContext.Provider>
        <Router>
          <Route path="/" exact>
            <Header />
            <BunnerNewCollection />
            <MainPageContent />
          </Route>

          <Route path="/male/:_id?">
            <MalePage />
          </Route>
          <Route path="/female">
            <FemalePage />
          </Route>

          <Route path="/kids">
            <KidsPage />
          </Route>
          <Route path="/newcollection">
            <CollectionPage />
          </Route>
          <Route path="/location">
            <Header />
            <Location />
          </Route>
          <Route path="/product/:_id">
            <Header />
            <Product />
          </Route>
          <Route path="/control">
            <ControlPage />
          </Route>
          <Route path="/login">
            <AuthPage />
          </Route>

          {/* <Route path="/login-failure">
            <LoginFailurePage />{' '}
          </Route> */}
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
