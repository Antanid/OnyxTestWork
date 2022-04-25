import react from "react";

import Close from "../../assets/img/icons8-close.svg";
import Line from "../../assets/img//Line 1.png";
import Time from "../../assets/img/Time.png";
import Location from "../../assets/img/Location.png"
import Complexit from "../../assets/img/complexity.png";
import Route from "../../assets/img/Route.png";

import QuadroFirst from "../../assets/img/baseQadro.svg";
import QuadroSecend from "../../assets/img/baseFistOther.svg";

import BikeFirst from "../../assets/img/popup_bike_1.svg";
import BikeSecend from "../../assets/img/popup-bike-2.svg";
import BikeThird from "../../assets/img/popup-bike-3.svg";
import BikeFour from "../../assets/img/popup-bike-4.svg";
import BikeFive from "../../assets/img/popup-bike-5.svg";
import BikeSix from "../../assets/img/popup-bike-6.svg";


import Ruble from '../../assets/img/popup_ruble.svg'

function PopUpExc({ setActive, active }) {
    return (
        <div className={active ? "popup__bg__exc active" : "popup__bg__exc"}>
            <div className="popup__exc" onClick={e => e.stopPropagation()}>
                <img onClick={() => setActive(false)} src={Close} alt="close-popup" className="close-popup_exc"/>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <img className="base__line_popup" src={Line} alt="line"/>
                                    <div className="exc__text">
                                        <h1>Екскурсія “РИО”</h1>
                                        <div className="popup_exc_h3">
                                            <h3> <img className="base__ico" src={Time} alt="time"/> ЧАС У ДОРОЗІ: <span> 4
                                                години</span></h3>
                                            <h3> <img className="base__ico" src={Location} alt="location"/> ВІДСТАНЬ: <span> 40
                                                -
                                                50 км</span></h3>
                                            <h3><img className="base__ico" src={Complexit} alt="complexity"/>СКЛАДНІСТЬ: <span>
                                                5***</span></h3>
                                        </div>
                                    </div>

                                    <div className="popup__routes__h4">
                                        <h4>МАРШРУТ <img className="base__icon__route" src={Route} alt="route"/></h4>
                                        <p>Смотрова - Джерело - Камінь Джигіта - Адербіївка - Гора Нексис -<br/>-Грозові Ворота -
                                            Шашлики - Цигельський водоспад (чаша кохання) - <br/>-Форсаж</p>
                                        </div>

                                            <div className="popup_exc_button">
                                                <button className="popup_button">Схема маршруту</button>
                                            </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="popup_exc__img">
                                            <img src={QuadroFirst} alt="qadro"/>
                                                <img src={QuadroSecend} alt="qadro"/>
                                                </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="popup__text__see">
                                                <h3>Що подивимося на маршруті:</h3>
                                            </div>
                                            <div className="popup_text__see_p">
                                                <div className="popup__text__firstPart">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue lacus lacus facilisis
                                                        orci nibh diam. Nisi, a et sit commodo. Pretium sed consectetur risus elementum,
                                                        habitasse turpis massa.</p>
                                                </div>
                                                <div className="popup__text__secendPart">
                                                    <p>In sit mi aenean volutpat. Quis lectus nunc nam euismod ultrices aenean. Vitae
                                                        venenatis
                                                        ut praesent neque sed quam mauris elementum. Risus blandit leo ut nullam egestas et
                                                        porta. Ut lacus arcu sagittis sit. Gravida et faucibus id tortor augue interdum quam
                                                        sit
                                                        diam. Laoreet nulla at et arcu pellentesque massa placerat elit. Adipiscing in
                                                        nullam
                                                        ipsum est. In sit mi aenean volutpat. Quis lectus nunc nam euismod ultrices aenean.
                                                        Vitae venenatis ut praesent neque sed quam mauris elementum. Risus blandit leo ut
                                                        nullam
                                                        egestas et porta. Ut lacus arcu sagittis sit.</p>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="popup__price">
                                                <h3>
                                                    Вартість екскурсії за 1 квадроцикл:</h3>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="popup__bike">
                                                <img className="popup__bike__img" src={BikeFirst} alt="bike"/>
                                                    <div className="popup__bike_text">
                                                        <p>UFORCE 1000 EPS (U10 EPS)</p>
                                                        <h4>4000 <img src={Ruble} alt="rubl"/></h4>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="popup__bike">
                                                <img className="popup__bike__img" src={BikeSecend} alt="bike"/>
                                                    <div className="popup__bike_text">
                                                        <p>CFORCE 1000 EPS (X10 EPS)</p>
                                                        <h4>6000 <img src={Ruble} alt="rubl"/></h4>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="popup__bike">
                                                <img className="popup__bike__img" src={BikeThird} alt="bike"/>
                                                    <div className="popup__bike_text">
                                                        <p>CFMOTO CFORCE 600 EPS</p>
                                                        <h4>7000 <img src={Ruble} alt="rubl"/></h4>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="popup__bike">
                                                <img className="popup__bike__img" src={BikeFour} alt="bike"/>
                                                    <div className="popup__bike_text">
                                                        <p>CFORCE 400L EPS (X4 EPS)</p>
                                                        <h4>8000 <img src={Ruble} alt="rubl"/></h4>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="popup__bike">
                                                <img className="popup__bike__img" src={BikeFive} alt="bike"/>
                                                    <div className="popup__bike_text">
                                                        <p>ZFORCE 1000</p>
                                                        <h4>9000 <img src={Ruble} alt="rubl"/></h4>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="popup__bike popup__bike_last">
                                                <img className="popup__bike__img" src={BikeSix} alt="bike"/>
                                                    <div className="popup__bike_text">
                                                        <p>UFORCE 1000 EPS (U10 EPS)</p>
                                                        <h4>4000 <img src={Ruble} alt="rubl"/></h4>
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="popup__backgr">
                                            <div className="col-lg-12">
                                                <div className="popup_form_h3">
                                                    <h3>Бронювання онлайн</h3>
                                                </div>
                                            </div>

                                            <div className="col-lg-10">
                                                <form className="popup_form">
                                                    <label>
                                                        <div className="label_data">
                                                            <h5>Бажана дата</h5>
                                                        </div>
                                                        <input type="date" name="date"/>
                                                    </label>

                                                    <label>
                                                        <div className="label_data">
                                                            <h5>Кількість осіб</h5>
                                                        </div>
                                                        <input type="number" name="number"/>
                                                    </label>
                                                </form>
                                            </div>

                                            <div className="col-lg-10">
                                                <form className="popup_form">
                                                    <label>
                                                        <div className="label_data">
                                                            <h5>Телефон або WhatsApp</h5>
                                                        </div>
                                                        <input type="phone" name="phone"/>
                                                    </label>

                                                    <label>
                                                        <div className="label_data">
                                                            <h5>Як до вас звертатись?</h5>
                                                        </div>
                                                        <input type="text" name="text" />
                                                    </label>
                                                </form>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="popup_form_button">
                                                    <button>Забронювати</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    )
}

                    export default PopUpExc;