import React, { useState } from 'react';

import bgVideo from '../assets/video/video-1.mp4';
import phone from "../assets/img/phone.png";
import logo from '../assets/img/logo.png';
import PopUpHead from './PopUp/PopUpHead';

function Head() {
    const [active, setActive] = useState(false);
    const [burger, setBurger] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <header id="header" className="header">
            <video className='videoBG' autoPlay loop muted>
                <source src={bgVideo} type='video/mp4' />
            </video>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-2">
                        <div className="nav__logo">
                            <img src={logo} alt="logo" />
                        </div>

                    </div>

                    <div className="col-lg-10 col-xs-12">

                        <div className="nav">
                            <div className={burger ? "menu__body _active" : "menu__body"}>
                                <ul
                                onClick={() => setBurger(false)}
                                 className="nav__ul">
                                    <li><a href="#our_routes_h2">Маршрути </a></li>
                                    <li><a href="#photo__h2">Галерея</a></li>
                                    <li><a href="#questions__head">Питання-відповідь </a></li>
                                    <li><a href="#contacts__h3">Контакти</a></li>
                                    <li onClick={() => setActive(true)} ><a onClick={handleClick} href="" className="popup_open">Забронювати</a></li>
                                </ul>

                                <div className="nav__number">
                                    <div className="number__call">
                                        <p className="number__p"><img src={phone} alt="phone" />+7 928 333 26 45</p>
                                        <button className="number__button">Передзвоніть мені
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div
                            onClick={() => setBurger(!burger)}
                                className={burger ? "menu__icon _active" : "menu__icon"}>
                                <span ></span>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="excursions">
                            <div className="excursions_text">
                                <h1 className="excursions__h1">
                                    Екскурсії на квадроциклах у Карпатах

                                </h1>
                                <h2 className="excursions__h2">приїжджайте за новими відчуттями та емоціями! </h2>
                            </div>

                            <div className="excursions__route">
                                <button className="excursions__button">
                                    Підібрати маршрут
                                    <img className="img__button" src="./assets/img/стрелка.png" alt="" />
                                </button>
                            </div>

                            <div className="slider-navigation ">
                                <div className="nav-btn active"></div>
                                <div className="nav-btn"></div>
                                <div className="nav-btn"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <PopUpHead active={active} setActive={setActive} />
        </header>
    );

}

export default Head