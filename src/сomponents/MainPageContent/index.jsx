import React from 'react';
import MainPageContentItem from '../MainPageContentItem';

import './MainPageContent.scss';
function MainPageContent() {
  return (
    <div className="wrapMainPageContent">
      <div className="mainPageContent ">
        <div id="slideMainPAge" style={{ height: 20 }}></div>
        <div className=" d-flex justify-between">
          <div style={{ width: '46%' }}>
            <img src="image/maleMainPage.png" style={{ width: '100%' }} alt="" />
          </div>
          <MainPageContentItem
            title="Мужская коллекция"
            text="Откройте для себя новинки и тренды этого сезона вместе с коллекцией мужской одежды. Здесь вы найдете все, что вам нужно: от базовых вещей, включая футболки, рубашки-поло и джинсы, до первоклассных часов и обуви."
            type="/male"
          />
        </div>
      </div>
      <div className="mainPageContent d-flex justify-between">
        <MainPageContentItem
          title="Женская коллекция"
          text="Куда бы вы ни собирались, на светское мероприятие, летний фестиваль или вечеринку в ночном клубе, коллекция нового сезона станет вашим идеальным выбором. будь то очаровательные платья, расклешенные юбки или вечерние наряды декором из пайеток. "
          type={'/female'}
        />
        <div style={{ width: '46%' }}>
          <img src="image/womanMainPage.png" style={{ width: '100%' }} alt="" />
        </div>
      </div>
      <div className="mainPageContent d-flex justify-between">
        <div style={{ width: '46%' }}>
          <img src="image/kidsMainPage.png" style={{ width: '100%' }} alt="" />
        </div>
        <MainPageContentItem
          title="Детская коллекция"
          text="Позвольте вашим детям сделать стильный первый шаг в мир моды. В нашей коллекции для детей найдется всё для любого возраста. Наша детская одежда  следует в русле последних трендов детской моды и одновременно отвечает всем требованиям."
          type={'/kids'}
        />
      </div>
    </div>
  );
}
export default MainPageContent;
