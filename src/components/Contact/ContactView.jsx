import React from 'react';
import PropTypes from 'prop-types';

function ContactView({ contact /* City, Phone, Ellipse, Email, Conact, WhatsUp, Inst, workTime, number, email, cityName  */ }) {
    return (
        <div className="col-lg-6">

            <div id="contacts__h3" className="contacts__h3">
                <h3>Контакти</h3>
            </div>

            <div className="contacts__top">
                <div className="contacts__city">
                    <p className="contacts__text"> <img src={contact.City} alt="City" /> {contact.city}</p>
                </div>
                <div className="contacts__number">
                    <img className="number__phone" src={contact.Phone} alt="Phone" />
                    <img className="number__elips" src={contact.Ellipse} alt="Ellipse" />
                    <span className="contacts__text">{contact.number}</span>
                </div>
            </div>

            <div className="contacts__bottom">
                <div className="contacts__email">
                    <img className="number__email" src={contact.Email} alt="Email" />
                    <img className="number__elips" src={contact.Ellipse} alt="Ellipse" />
                    <span className="contacts__text">{contact.email}</span>
                </div>

                <div className="contacts__timeWork">
                    <img className="number__time" src={contact.Connact} alt="Conact" />
                    <img className="number__elips" src={contact.Ellipse} alt="Ellipse" />
                </div>
                <div className="timeWork">
                    <p className="contacts__text_time">{contact.workTime}
                    </p>
                </div>
            </div>

            <div className="contact__social">
                <div className="contact__social__h4">
                    <h4>Написати нам:
                    </h4>
                </div>
                <div className="contact__social_group">
                    <button className="contacts__whatsup"> <img src={contact.WhatsUp} alt="WhatsUp" /></button>
                    <button className="contacts__inst"><img src={contact.Inst} alt="Inst" /></button>

                </div>
            </div>

        </div>
    )
}

export default ContactView;


ContactView.propTypes = {
    contact: PropTypes.node.isRequired,
}
 
ContactView.propTypes = {
    contact: PropTypes.objectOf(PropTypes.string),
}
 
