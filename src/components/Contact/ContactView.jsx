import React from 'react';
import PropTypes from 'prop-types';

import './Style.scss';

function ContactView({
  CityImg,
  PhoneImg,
  EllipseImg,
  EmailImg,
  ConactImg,
  WhatsUp,
  Inst,
  workTime,
  number,
  email,
  cityName 
}) {
  return (
    <div className="col-lg-6">

      <div id="contacts__h3" className="contacts__h3">
        <h3>Контакти</h3>
      </div>

      <div className="contacts__top">
        <div className="contacts__city">
          <p className="contacts__text"> 
            {' '}
            <img src={CityImg} alt="City" /> 
            {' '}
            {cityName}
          </p>
        </div>
        <div className="contacts__number">
          <img className="number__phone" src={PhoneImg} alt="Phone" />
          <img className="number__elips" src={EllipseImg} alt="Ellipse" />
          <span className="contacts__text">{number}</span>
        </div>
      </div>

      <div className="contacts__bottom">
        <div className="contacts__email">
          <img className="number__email" src={EmailImg} alt="Email" />
          <img className="number__elips" src={EllipseImg} alt="Ellipse" />
          <span className="contacts__text">{email}</span>
        </div>

        <div className="contacts__timeWork">
          <img className="number__time" src={ConactImg} alt="Conact" />
          <img className="number__elips" src={EllipseImg} alt="Ellipse" />
        </div>
        <div className="timeWork">
          <p className="contacts__text_time">
            {workTime}
          </p>
        </div>
      </div>

      <div className="contact__social">
        <div className="contact__social__h4">
          <h4>
            Написати нам:
          </h4>
        </div>
        <div className="contact__social_group">
          <button 
            type="button"
            className="contacts__whatsup"
          > 
            {' '}
            <img src={WhatsUp} alt="WhatsUp" />
          </button>
          <button 
            type="button"
            className="contacts__inst"
          >
            <img src={Inst} alt="Inst" />
          </button>
        </div>
      </div>

    </div>
  );
}

export default ContactView;

ContactView.propTypes = {
  CityImg: PropTypes.string.isRequired,
  PhoneImg: PropTypes.string.isRequired,
  EllipseImg: PropTypes.string.isRequired,
  EmailImg: PropTypes.string.isRequired,
  ConactImg: PropTypes.string.isRequired,
  WhatsUp: PropTypes.string.isRequired, 
  Inst: PropTypes.string.isRequired,
  workTime: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
};
