import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { openPopUp, closePopUp } from '../../redux/popUpHeader/action';
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
  const [burger, setBurger] = useState(false);

  const dispatch = useDispatch();

  const open = (e) => {
    e.preventDefault();
    dispatch(openPopUp());
  };

  const close = (e) => {
    e.preventDefault();
    dispatch(closePopUp());
  };

  const popUp = useSelector((state) => {
    const { popUpRuducer } = state;
    return popUpRuducer.bull;
  });
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
            OpenPopUp={open}
            burger={burger}
            setBurger={setBurger}
          />

          <HeadText
            arrow={arrow}
          />

        </div>
      </div>
      {popUp
        && <PopUpHead ClosePopUp={close} />}
    </header>
  );
}

export default Head;
