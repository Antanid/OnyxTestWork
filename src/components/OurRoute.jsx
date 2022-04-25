import React, { useState } from "react";

import Rubl from "../assets/img/rubl.png";
import Line from "../assets/img/Line 1.png";
import Time from "../assets/img/Time.png";
import Location from '../assets/img/Location.png';
import Complexity from "../assets/img/complexity.png";
import Route from "../assets/img/Route.png";

import Qadro from "../assets/img/baseQadro.svg";
import QadroSecend from "../assets/img/baseFistOther.svg";
import QadroThird from "../assets/img/Second2.svg";

import SecendQadroFirst from "../assets/img/baseFistOther.svg";
import SecendQadroSecend from "../assets/img/Second2.svg";
import SecendQadroThird from "../assets/img/Second.svg";

import ThirdQadroFirst from "../assets/img/ThirdRout.svg";
import ThirdQadroSecend from "../assets/img/baseFistOther.svg";
import ThirdQadroThird from "../assets/img/ThirdRout2.svg";
import PopUpExc from "./PopUp/PopUpExc";




const OurRoute = () => {

const [active, setActive] = useState(false);

    return (
        <article className="our__route">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="our_routes">
                            <h2 id="our_routes_h2" className="our_routes_h2">Наші маршрути
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-1">
                        <img className="base__line" src={Line} alt="line" />
                    </div>


                    <div className="col-lg-5">
                        <div className="route__base">

                            <div className="base__h2">
                                <h2> БАЗОВИЙ <br /> <span>від 4000 </span>
                                    <img className="base__money" src={Rubl} alt="money" />
                                </h2>
                            </div>

                            <div className="base__h3">
                                <h3> <img className="base__ico" src={Time} alt="time" /> ЧАС У ДОРОЗІ: <span> 1,5 - 2
                                    години</span></h3>
                                <h3> <img className="base__ico" src={Location} alt="location" /> ВІДСТАНЬ: <span> 20
                                    -
                                    25 км</span></h3>
                                <h3><img className="base__ico" src={Complexity} alt="complexity" />СКЛАДНІСТЬ: <span>
                                    5***</span></h3>
                            </div>

                            <div className="base__routes__h4">
                                <h4>МАРШРУТ <img className="base__icon__route" src={Route} alt="route" /></h4>
                                <p>
                                    Смотрова - Джерело - Камінь Джигіта - Адербіївка - Гора Нексис - -Грозові Ворота -
                                    Шашлики - Цигельський водоспад (чаша кохання) - -Форсаж</p>
                            </div>

                            <div className="base__routes__button">
                                <button onClick={() => setActive(true)} className="base__button__moreInf open-popup-exc">Докладніше</button>
                                <button onClick={() => setActive(true)} className="base__button__book open-popup-exc">Забронювати
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">

                        <div className="our__route__img">
                            <div className="carousel-slider">
                                <section id="slider">
                                    <input readOnly type="radio" name="slider-1" id="s1" checked />
                                    <input readOnly type="radio" name="slider-1" id="s2" />
                                    <input readOnly type="radio" name="slider-1" id="s3" />

                                    <label htmlFor="s1" id="slide1">
                                        <div className="slider-image">
                                            <img src={Qadro} alt="qadro" />
                                        </div>
                                    </label>
                                    <label htmlFor="s2" id="slide2">
                                        <div className="slider-image">
                                            <img src={QadroSecend} alt="qadro" />
                                        </div>
                                    </label>
                                    <label htmlFor="s3" id="slide3">
                                        <div className="slider-image">
                                            <img src={QadroThird} alt="qadro" />
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>



                    </div>




                    <div className="col-lg-6 col-sm-12">
                        <div className="SecondRout__img">
                            <div className="carousel-slider-2">
                                <section id="slider-2">
                                    <input readOnly type="radio" name="slider-2" id="s1-2" checked />
                                    <input readOnly type="radio" name="slider-2" id="s2-2" />
                                    <input readOnly type="radio" name="slider-2" id="s3-2" />

                                    <label htmlFor="s1-2" id="slide1-2">
                                        <div className="slider-image">

                                            <img src={SecendQadroFirst} alt="qadro" />
                                        </div>
                                    </label>
                                    <label htmlFor="s2-2" id="slide2-2">
                                        <div className="slider-image">
                                            <img src={SecendQadroSecend} alt="qadro" />
                                        </div>
                                    </label>
                                    <label htmlFor="s3-2" id="slide3-2">
                                        <div className="slider-image">
                                            <img src={SecendQadroThird} alt="qadro" />
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-1">
                        <img className="SecondBase__line" src={Line} alt="line" />
                    </div>

                    <div className="col-lg-5">
                        <div className="SecondRoute__base">

                            <div className="base__h2">
                                <h2> РОЗШИРЕНИЙ <br /> <span>от 16000 </span>
                                    <img className="base__money" src={Rubl} alt="money" />
                                </h2>
                            </div>

                            <div className="base__h3">
                                <h3> <img className="base__ico" src={Time} alt="time" /> ЧАС У ДОРОЗІ
                                    : <span> 6 - 8
                                        часов</span></h3>
                                <h3> <img className="base__ico" src={Location} alt="location" /> ВІДСТАНЬ: <span> 60
                                    -
                                    70 км</span></h3>
                                <h3><img className="base__ico" src={Complexity} alt="complexity" />СКЛАДНІСТЬ: <span>
                                    5***</span></h3>
                            </div>

                            <div className="base__routes__h4">
                                <h4>МАРШРУТ <img className="base__icon__route" src={Route} alt="route" /></h4>
                                <p>Оглядова - Джерело - Камінь Джигіта - Адербіївка - Гора Нексис -
                                    -Грозові Ворота - Шашлики - Цигельський водоспад (чаша кохання) -
                                    -Форсаж</p>
                            </div>

                            <div className="base__routes__button base__routes__buttonSecond">
                                <button onClick={() => setActive(true)} className="base__button__moreInf open-popup-exc">Докладніше</button>
                                <button onClick={() => setActive(true)} className="base__button__book open-popup-exc">Забронювати</button>
                            </div>

                        </div>
                    </div>


                    <div className="col-lg-1">
                        <img className="base__line base__line2" src={Line} alt="line" />
                    </div>

                    <div className="col-lg-5">
                        <div className="route__base route__base2">

                            <div className="base__h2">
                                <h2> EXPERIENCE <br /> <span>от 7000 </span>
                                    <img className="base__money" src={Rubl} alt="money" />
                                </h2>
                            </div>

                            <div className="base__h3">
                                <h3> <img className="base__ico" src={Time} alt="time" /> ЧАС У ДОРОЗІ
                                    : <span> 4
                                        часа</span></h3>
                                <h3> <img className="base__ico" src={Location} alt="location" /> ВІДСТАНЬ: <span> 40
                                    -
                                    50 км</span></h3>
                                <h3><img className="base__ico" src={Complexity} alt="complexity" />СКЛАДНІСТЬ: <span>
                                    5***</span></h3>
                            </div>

                            <div className="base__routes__h4">
                                <h4>МАРШРУТ <img className="base__icon__route" src={Route} alt="route" /></h4>
                                <p>
                                    Форсаж - Синя бухта – Занедбана Тур База – Суховантаж Ріо - <br />- Форсаж</p>
                            </div>

                            <div className="base__routes__button">
                                <button onClick={() => setActive(true)} className="base__button__moreInf open-popup-exc">Подробнее</button>
                                <button onClick={() => setActive(true)} className="base__button__book open-popup-exc">Забронировать</button>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <div className="our__route__img our__route__img2">

                            <div className="carousel-slider-3">
                                <section id="slider-3">
                                    <input readOnly type="radio" name="slider-3" id="s1-3" checked />
                                    <input readOnly type="radio" name="slider-3" id="s2-3" />
                                    <input readOnly type="radio" name="slider-3" id="s3-3" />

                                    <label htmlFor="s1-3" id="slide1-3">
                                        <div className="slider-image">
                                            <img src={ThirdQadroFirst} alt="qadro" />
                                        </div>
                                    </label>
                                    <label htmlFor="s2-3" id="slide2-3">
                                        <div className="slider-image">
                                            <img src={ThirdQadroSecend} alt="qadro" />

                                        </div>
                                    </label>
                                    <label htmlFor="s3-3" id="slide3-3">
                                        <div className="slider-image">
                                            <img src={ThirdQadroThird} alt="qadro" />
                                        </div>
                                    </label>
                                </section>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <PopUpExc active={active} setActive={setActive} />
        </article>
    );
}

export default OurRoute;