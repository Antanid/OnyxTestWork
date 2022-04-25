import React from "react";

import City from "../assets/img/ContactCity.svg";
import Phone from "../assets/img/ContactPhone.svg";
import Email from "../assets/img/ContactEmail.png";
import Conact from "../assets/img/ContactTime.png";
import Ellipse from "../assets/img/Ellipse 24.png";
import WhatsUp from "../assets/img/Whatsup.png";
import Inst from "../assets/img/Instagram.png";

class Contacts extends React.Component {
    render() {
        return (
            <section className="section__contacts">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">

                            <div id="contacts__h3" className="contacts__h3">
                                <h3>Контакти</h3>
                            </div>

                            <div className="contacts__top">
                                <div className="contacts__city">
                                    <p className="contacts__text"> <img src={City} alt="City" /> Місто Карпати</p>
                                </div>
                                <div className="contacts__number">
                                    <img className="number__phone" src={Phone} alt="Phone" />
                                    <img className="number__elips" src={Ellipse} alt="Ellipse" />
                                    <span className="contacts__text">+7 928 428-00-62</span>
                                </div>
                            </div>

                            <div className="contacts__bottom">
                                <div className="contacts__email">
                                    <img className="number__email" src={Email} alt="Email" />
                                    <img className="number__elips" src={Ellipse} alt="Ellipse" />
                                    <span className="contacts__text">experience@groupgrand.ru</span>
                                </div>

                                <div className="contacts__timeWork">
                                    <img className="number__time" src={Conact} alt="Conact" />
                                    <img className="number__elips" src={Ellipse} alt="Ellipse" />
                                </div>
                                <div className="timeWork">
                                    <p className="contacts__text_time">Пн - Пт: 9:00 - 18:00 <br /> Сб: 9:00 - 17:00 <br /> Вс -
                                        вихідний
                                    </p>
                                </div>
                            </div>

                            <div className="contact__social">
                                <div className="contact__social__h4">
                                    <h4>Написати нам:
                                    </h4>
                                </div>
                                <div className="contact__social_group">
                                    <button className="contacts__whatsup"> <img src={WhatsUp} alt="WhatsUp" /></button>
                                    <button className="contacts__inst"><img src={Inst} alt="Inst" /></button>

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d338303.67742516036!2d32.288683!3d48.514113!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1645960848365!5m2!1sen!2sua"
                                    style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contacts;