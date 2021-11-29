import React from 'react';
import './ModalData.scss';
const ModalData = ({ type, gender, age }) => {
  function name() {
    if ((type === 'top') & (gender === 'female') & (age === 'old')) {
      return (
        <div>
          <div className="textDataModal d-flex mb-20">
            <div className="nameSizeModal">Международный размер</div>
            <div className="nameSizeModal">Европейский размер</div>
            <div className="nameSizeModal">Российский размер</div>
          </div>

          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">S</div>
            <div className="nameSizeModal">40</div>
            <div className="nameSizeModal">46</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">M</div>
            <div className="nameSizeModal">42</div>
            <div className="nameSizeModal">48</div>
          </div>
          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">L</div>
            <div className="nameSizeModal">44</div>
            <div className="nameSizeModal">50</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">XL</div>
            <div className="nameSizeModal">46</div>
            <div className="nameSizeModal">52</div>
          </div>
        </div>
      );
    } else if ((type === 'top') & (gender === 'male') & (age === 'old')) {
      return (
        <div>
          <div className="textDataModal d-flex mb-20">
            <div className="nameSizeModal">Международный размер</div>
            <div className="nameSizeModal">Европейский размер</div>
            <div className="nameSizeModal">Российский размер</div>
          </div>

          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">S</div>
            <div className="nameSizeModal">46</div>
            <div className="nameSizeModal">46</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">M</div>
            <div className="nameSizeModal">48</div>
            <div className="nameSizeModal">48</div>
          </div>
          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">L</div>
            <div className="nameSizeModal">50</div>
            <div className="nameSizeModal">50</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">XL</div>
            <div className="nameSizeModal">52</div>
            <div className="nameSizeModal">52</div>
          </div>
        </div>
      );
    } else if ((type === 'pants') & (gender === 'female') & (age === 'old')) {
      return (
        <div>
          <div className="textDataModal d-flex mb-20">
            <div className="nameSizeModal">Международный размер</div>
            <div className="nameSizeModal">Европейский размер</div>
            <div className="nameSizeModal">Российский размер</div>
          </div>

          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">S</div>
            <div className="nameSizeModal">36</div>
            <div className="nameSizeModal">42</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">M</div>
            <div className="nameSizeModal">40</div>
            <div className="nameSizeModal">46</div>
          </div>
          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">L</div>
            <div className="nameSizeModal">44</div>
            <div className="nameSizeModal">50</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">XL</div>
            <div className="nameSizeModal">46</div>
            <div className="nameSizeModal">52</div>
          </div>
        </div>
      );
    } else if ((type === 'pants') & (gender === 'male') & (age === 'old')) {
      return (
        <div>
          <div className="textDataModal d-flex mb-20">
            <div className="nameSizeModal">Международный размер</div>
            <div className="nameSizeModal">Европейский размер</div>
            <div className="nameSizeModal">Российский размер</div>
          </div>

          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">S</div>
            <div className="nameSizeModal">42</div>
            <div className="nameSizeModal">48</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">M</div>
            <div className="nameSizeModal">44</div>
            <div className="nameSizeModal">50</div>
          </div>
          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">L</div>
            <div className="nameSizeModal">46</div>
            <div className="nameSizeModal">52</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">XL</div>
            <div className="nameSizeModal">48</div>
            <div className="nameSizeModal">54</div>
          </div>
        </div>
      );
    } else if (((type === 'top') | (type === 'pants')) & (age === 'kids')) {
      return (
        <div>
          <div className="textDataModal d-flex mb-20">
            <div className="nameSizeModal">Международный размер</div>
            <div className="nameSizeModal">Российский размер</div>
            <div className="nameSizeModal">Рост</div>
          </div>

          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">S</div>
            <div className="nameSizeModal">36</div>
            <div className="nameSizeModal">110-120 см</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">M</div>
            <div className="nameSizeModal">38</div>
            <div className="nameSizeModal">120-130 см</div>
          </div>
          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">L</div>
            <div className="nameSizeModal">40</div>
            <div className="nameSizeModal">130-140 см</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">XL</div>
            <div className="nameSizeModal">42</div>
            <div className="nameSizeModal">140-150 см</div>
          </div>
        </div>
      );
    } else if ((type === 'shoes') & (age === 'old')) {
      return (
        <div>
          <div className="textDataModal d-flex mb-20">
            <div className="nameSizeModal">Международный размер</div>
            <div className="nameSizeModal">Длина стопы</div>
            <div className="nameSizeModal">Российский размер</div>
          </div>

          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">S</div>
            <div className="nameSizeModal">25,5 см</div>
            <div className="nameSizeModal">39</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">M</div>
            <div className="nameSizeModal">26 см</div>
            <div className="nameSizeModal">40</div>
          </div>
          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">L</div>
            <div className="nameSizeModal">26,5 см</div>
            <div className="nameSizeModal">41</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">XL</div>
            <div className="nameSizeModal">27,5 см</div>
            <div className="nameSizeModal">42</div>
          </div>
        </div>
      );
    } else if ((type === 'shoes') & (age === 'kids')) {
      return (
        <div>
          <div className="textDataModal d-flex mb-20">
            <div className="nameSizeModal">Международный размер</div>
            <div className="nameSizeModal">Длина стопы</div>
            <div className="nameSizeModal">Российский размер</div>
          </div>

          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">S</div>
            <div className="nameSizeModal">18,5 см</div>
            <div className="nameSizeModal">29</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">M</div>
            <div className="nameSizeModal">19,7 см</div>
            <div className="nameSizeModal">31</div>
          </div>
          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">L</div>
            <div className="nameSizeModal">21 см</div>
            <div className="nameSizeModal">33</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">XL</div>
            <div className="nameSizeModal">22,1 см</div>
            <div className="nameSizeModal">35</div>
          </div>
        </div>
      );
    } else if ((type === 'watch') & (age === 'old')) {
      return (
        <div>
          <div className="textDataModal d-flex mb-20">
            <div className="nameSizeModal">Международный размер</div>
            <div className="nameSizeModal">Длина ремешка</div>
            <div className="nameSizeModal">Ширина ремешка</div>
          </div>

          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">S</div>
            <div className="nameSizeModal">15 см</div>
            <div className="nameSizeModal">38 мм</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">M</div>
            <div className="nameSizeModal">16,5 см</div>
            <div className="nameSizeModal">40 мм</div>
          </div>
          <div
            style={{ paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(221, 221, 221, 0.3)' }}
            className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">L</div>
            <div className="nameSizeModal">17 см</div>
            <div className="nameSizeModal">42 мм</div>
          </div>
          <div style={{ paddingTop: 5, paddingBottom: 5 }} className="textDataModal d-flex mt-10">
            <div className="nameSizeModal">XL</div>
            <div className="nameSizeModal">18,5 см</div>
            <div className="nameSizeModal">45 мм</div>
          </div>
        </div>
      );
    }
  }
  return (
    <div>
      <div className="HeaderModal mb-15">Размерная cетка</div>
      {name()}
    </div>
  );
};

export default ModalData;
