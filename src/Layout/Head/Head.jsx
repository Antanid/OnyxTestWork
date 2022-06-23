import React, { useState } from 'react';

import bgVideo from '../../assets/video/video-1.mp4';
import phone from '../../assets/img/phone.png';
import logo from '../../assets/img/logo.png';
import PopUpHead from '../../components/PopUpHead/PopUpHead';
import arrow from '../../assets/img/стрелка.png';
import HeadLogo from './HeadLogo';
import HeadMenu from './HeadMenu';
import HeadText from './HeadText';

import './sass/Style.scss';

function Head() {
  const [active, setActive] = useState(false);
  const [burger, setBurger] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setActive(true);
  };

  return (
    <header id="header" className="header">
      <video className="videoBG" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="container-fluid">
        <div className="row">

          <HeadLogo logo={logo} />

          <HeadMenu
            number="+7 928 333 26 45"
            phone={phone}
            handleClick={handleClick}
            setActive={setActive}
            burger={burger}
            setBurger={setBurger}
          />

          <HeadText
            arrow={arrow}
            textH1=" Екскурсії на квадроциклах у Карпатах"
            textH2="приїжджайте за новими відчуттями та емоціями!"
            buttonText="Підібрати маршрут"
          />

        </div>
      </div>

      <PopUpHead active={active} setActive={setActive} />
    </header>
  );
}

export default Head;
