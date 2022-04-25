import React from "react";

import Footer from "../assets/img/LogoFooter.png";

class PreEnd extends React.Component {
    render() {
        return (
            <section className="section__end">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-sm-6">
                            <div className="footer__logo">
                                <img src={Footer} alt="Footer" />
                            </div>
                        </div>

                        <div className="col-lg-10 col-sm-6">
                            <div className="footer__all">
                                <div className="footer__menu">
                                    <ul>
                                        <li><a href="#our_routes_h2">МАРШРУТЫ</a></li>
                                        <li><a href="#photo__h2">ГАЛЕРЕЯ</a></li>
                                        <li><a href="#questions__head">ВОПРОС-ОТВЕТ</a></li>
                                        <li><a href="#contacts__h3">КОНТАКТЫ</a></li>
                                        <li><a href="#services__h2">УСЛОВИЯ</a></li>
                                        <li><a href="#special__offer__h2">СПЕЦПРЕДЛОЖЕНИЯ</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default PreEnd;