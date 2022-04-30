import React from "react";

import servicePhoto from "../assets/img/ServicICON.svg";


class Service extends React.Component {
    render() {
        return (
            <section className="services">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div id="services__h2" className="services__h2">
                                <h2>
                                    Умови надання послуг
                                </h2>
                            </div>

                        </div>

                        <div className="col-lg-4">
                            <div className="services__block">
                                <div className="services__icon">
                                    <img src={servicePhoto} alt="" />
                                </div>
                                <div className="services__text">
                                    <p>
                                        При прокаті або оренді суворо дотримуватися правил техніки безпеки та все
                                        вимоги
                                        інструктора!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="services__block">
                                <div className="services__icon">
                                    <img src={servicePhoto} alt="" />
                                </div>
                                <div className="services__text">
                                    <p>
                                        До управління <span>НЕ ДОПУСКАЮТЬСЯ</span>
                                        особи молодше 16 років та особи в алкогольному сп'яніння!
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="services__block">
                                <div className="services__icon">
                                    <img src={servicePhoto} alt="" />
                                </div>
                                <div className="services__text">
                                    <p>
                                        Розпивати спиртні напої під час прокату, оренди
                                        <span>ЗАБОРОНЕНО!</span> (Після?)
                                        На
                                        ваш розсуд)
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="services__block">
                                <div className="services__icon">
                                    <img src={servicePhoto} alt="" />
                                </div>
                                <div className="services__text">
                                    <p>
                                        Управління здійснюйте у міру своїх сил та можливостей. Не переоцінюйте себе!
                                        Це
                                        небезпечно!
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="services__block">
                                <div className="services__icon">
                                    <img src={servicePhoto} alt="" />
                                </div>
                                <div className="services__text">
                                    <p>
                                        Перед кожним катанням досвідчений інструктор навчить Вас основ управління та буде
                                        супроводжувати протягом усього маршруту.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="services__block services__block__end">
                                <div className="services__icon">
                                    <img src={servicePhoto} alt="" />
                                </div>
                                <div className="services__text">
                                    <p>
                                        При прокаті або оренді суворо дотримуватися правил техніки безпеки та все
                                        вимоги
                                        інструктора!
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        );
    }
}

export default Service;