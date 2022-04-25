import React from "react";

import evacuation from "../assets/img/additional1.svg";
import Photo from "../assets/img/additional2.svg";
import Transp from "../assets/img/additional3.svg";
import CheckUp from "../assets/img/additional4.svg";
import Corpotartion from "../assets/img/additional5.svg";
import Keitering from "../assets/img/additional6.svg";
import Route from "../assets/img/additional7.svg";
import Services from "../assets/img/additional8.svg";


class Additional extends React.Component {
    render() {
        return (
            <section className="section__additional">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-3 col-sm-6">
                            <div className="additional__services">
                                <div className="additional__img">
                                    <img src={evacuation} alt="evacuation" />
                                </div>
                                <div className="additional__text">
                                    <h4>Евакуація, ремонт квадроциклів</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="additional__services">
                                <div className="additional__img">
                                    <img src={Photo} alt="evacuation" />
                                </div>
                                <div className="additional__text">
                                    <h4>Фото, відеозйомка</h4>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6">
                            <div className="additional__services">
                                <div className="additional__img">
                                    <img src={Transp} alt="evacuation" />
                                </div>
                                <div className="additional__text">
                                    <h4>Транспортування техніки</h4>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6">
                            <div className="additional__services">
                                <div className="additional__img">
                                    <img src={CheckUp} alt="evacuation" />
                                </div>
                                <div className="additional__text">
                                    <h4>Заправка, чекап, мийка</h4>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6">
                            <div className="additional__services">
                                <div className="additional__img">
                                    <img src={Corpotartion} alt="evacuation" />
                                </div>
                                <div className="additional__text">
                                    <h4>Корпоративи, тимбілдінги</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="additional__services">
                                <div className="additional__img">
                                    <img src={Keitering} alt="evacuation" />
                                </div>
                                <div className="additional__text">
                                    <h4>Виїзний кейтеринг</h4>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6">
                            <div className="additional__services">
                                <div className="additional__img">
                                    <img src={Route} alt="evacuation" />
                                </div>
                                <div className="additional__text">
                                    <h4>Індивідуальні маршрути</h4>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6">
                            <div className="additional__services">
                                <div className="additional__img">
                                    <img src={Services} alt="evacuation" />
                                </div>
                                <div className="additional__text">
                                    <h4>Послуги, гідні маршрути</h4>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}

export default Additional;