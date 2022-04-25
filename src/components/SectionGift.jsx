import React from "react";

import gift from "../assets/img/GiftImg.svg";

class Gift extends React.Component {
    render() {
        return (
            <section className="section__gift">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-xs-12">
                            <div className="gift__head">
                                <h2>
                                    Подарунковий сертифікат
                                </h2>
                                <h5>Бажаєте зробити оригінальний подарунок? <br /> Подаруйте незабутні емоції – найкращий
                                    подарунок!
                                </h5>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xs-12">
                            <div className="gift__all">
                                <div className="gift__text">
                                    <h5>Бажаєте здивувати своїх близьких оригінальним подарунком? Подарунковий сертифікат на
                                        екскурсію
                                        на квадроциклах стане не просто цікавим подарунком, а реальною можливістю
                                        наблизити Ваших друзів та близьких до нового захоплення.
                                    </h5>
                                </div>
                                <button className="gift__button">Підберемо сертифікат для вас
                                </button>
                            </div>
                        </div>

                        <div className='col-lg-6 col-xs-12'>
                            <div className="gift__img">
                                <img src={gift} alt="gift" />
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        )
    }
}

export default Gift;