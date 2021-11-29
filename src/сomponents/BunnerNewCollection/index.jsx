import React from 'react';
import BlackButton from '../BlackButton';
import './BunnerNewCollection.scss';
import { AppContext } from '../../context';
import { arraySection } from '../../arraysDate';
import { Link } from 'react-router-dom';
function BunnerNewCollection() {
  // const [section, setSection] = React.useContext(AppContext);

  // function clickNewCollection() {
  //   setSection(arraySection[4]);
  // }
  function scrollTest() {
    let letSlide = document.getElementById('slideMainPAge');
    letSlide.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <div style={{ position: 'relative' }}></div>

      <div
        className="wrapBunnerNewCollection"
        style={{ backgroundImage: 'url(image/NewCollect.png)' }}>
        <svg
          className="arrowSlideMainPage"
          onClick={() => {
            scrollTest();
          }}
          style={{
            height: 50,
            width: 130,
            cursor: 'pointer',
            position: 'absolute',
            margin: '0 auto',
            left: '46%',
            top: 700,
          }}
          width="580"
          height="400"
          xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>background</title>
            <g
              display="none"
              overflow="visible"
              y="0"
              x="0"
              height="100%"
              width="100%"
              id="canvasGrid">
              <rect
                fill="url(#gridpattern)"
                stroke-width="0"
                y="0"
                x="0"
                height="100%"
                width="100%"
              />
            </g>
          </g>
          <g>
            <title>Layer 1</title>
            <line
              stroke="#000"
              stroke-linecap="undefined"
              stroke-linejoin="undefined"
              id="svg_1"
              y2="36"
              x2="62"
              y1="8"
              x1="8"
              stroke-width="0.8"
              fill="none"
            />
            <line
              stroke="#000"
              stroke-linecap="undefined"
              stroke-linejoin="undefined"
              id="svg_2"
              y2="36"
              x2="61.9"
              y1="8"
              x1="116"
              stroke-width="0.8"
              fill="none"
            />
          </g>
        </svg>
        <div className="newCollectInfo d-flex flex-column">
          <span
            style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: 35, marginBottom: 5 }}>
            Новая коллекция
          </span>
          <b style={{ fontStyle: 'normal', fontWeight: 500, fontSize: 40, marginBottom: 5 }}>
            Lituania d'autunno
          </b>
          <span
            style={{
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: 24,
              color: 'rgba(41, 41, 41, 0.9)',
              marginBottom: 10,
              marginLeft: 2,
            }}>
            Новинки для нее и для него
          </span>
          {/* <Link onClick={() => clickNewCollection()} to="/newcollection">
            <BlackButton title="Смотреть" />
          </Link> */}
          <Link to="/newcollection">
            <BlackButton title="Смотреть" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BunnerNewCollection;
