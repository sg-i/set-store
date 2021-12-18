import React from 'react';
import axios from 'axios';
import './ContentClothes.scss';
import ContentClothesItem from '../ContentClothesItem';
import { AppContext } from '../../context';
import ContentLoader from 'react-content-loader';
function ContentClothes({ filtopenWrap, typeClothes, loadingClothes, clothes, sortType }) {
  //   clothes.length===0 ?  return (<ContentLoader
  //   speed={2}
  //   width={280}
  //   height={490}
  //   viewBox="0 0 280 490"
  //   backgroundColor="#ededed"
  //   foregroundColor="#ffffff">
  //   <rect x="29" y="345" rx="18" ry="18" width="206" height="33" />
  //   <rect x="90" y="415" rx="0" ry="0" width="80" height="0" />
  //   <rect x="88" y="417" rx="18" ry="18" width="89" height="33" />
  //   <rect x="27" y="21" rx="33" ry="33" width="219" height="295" />
  // </ContentLoader> )
  let testarr = ['', '', '', '', '', '', '', '', '', '', '', '', ''];
  return (
    <div className="wrapContentClothes d-flex">
      {loadingClothes &&
        testarr.map((sd) => (
          <ContentLoader
            speed={2}
            width={380}
            height={490}
            viewBox="0 0 380 490"
            backgroundColor="#ededed"
            foregroundColor="#ffffff">
            <rect x="99" y="345" rx="18" ry="18" width="206" height="33" />
            <rect x="160" y="415" rx="0" ry="0" width="80" height="0" />
            <rect x="158" y="417" rx="18" ry="18" width="89" height="33" />
            <rect x="97" y="21" rx="33" ry="33" width="219" height="295" />
          </ContentLoader>
        ))}
      {/* {loadingClothes === false && clothes.length == 0 && <div>Товаров не найдено</div>} */}
      {sortType === 'По популярности' &&
        clothes
          .sort((prev, next) => next.views - prev.views)
          .map((el) => {
            return <ContentClothesItem filtopenWrap={filtopenWrap} el={el} />;
          })}
      {sortType === 'По возрастанию цены' &&
        clothes
          .sort((prev, next) => prev.price - next.price)
          .map((el) => {
            return <ContentClothesItem filtopenWrap={filtopenWrap} el={el} />;
          })}
      {sortType === 'По убыванию цены' &&
        clothes
          .sort((prev, next) => next.price - prev.price)
          .map((el) => {
            return <ContentClothesItem filtopenWrap={filtopenWrap} el={el} />;
          })}
    </div>
  );
}
export default ContentClothes;
