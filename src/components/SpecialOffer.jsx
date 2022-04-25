import React from "react";

import Present from "../assets/img/present.png";
import House from "../assets/img/domik.png";


class SpecialOffer extends React.Component {
    render() {
        return (
            <section className="special__offer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div id="special__offer__h2" className="special__offer__h2">
                                <h2>Спецпропозиції</h2>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xs-12">
                            <div className="special__offer__all">

                                <div>
                                    <img className="img__offer img__offer__first" src={Present} alt="Present" />
                                </div>

                                <div className="special__text">
                                    <h3>Знижка 10% <br /> <span>на День Народження</span>
                                    </h3>
                                    <p>на честь Дня Народження - даруємо імениннику знижку 10%
                                    </p>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-6 col-xs-12">
                            <div className="special__offer__secend">

                                <div>
                                    <img className="img__offer" src={House} alt="House" />
                                </div>

                                <div className="special__text">
                                    <h3>Знижка 10% <br />
                                    </h3>
                                    <p>клієнтам Ex-Karpati на послуги Заміського клубу Ягода Малина
                                    </p>
                                    <div className="spec__but">
                                        <button className="spec__offer__but">Докладніше</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default SpecialOffer;