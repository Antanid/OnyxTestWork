import React, { useState } from 'react';
import ImgGirl from '../../../assets/img/team/Maksim.svg';

function ButtonTable() {
  const [openImg, setOpenImg] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setOpenImg(!openImg)}>
        Открыть изображение
      </button>

      {
        openImg
        && (
          <div>
            <img onError={() => console.log('not load')} onLoad={() => console.log('load')} src={ImgGirl} alt="" />
            <img onError={() => console.log('not load')} src="../../../assets/img/team/Makim.svg" alt="" />
          </div>
        )
      }
    </div>
  );
}

export default ButtonTable;
