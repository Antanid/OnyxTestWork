import React from 'react';
import PropTypes from 'prop-types';

import './sass/Style.scss';

function ContactView({
  cityImg,
  phoneImg,
  ellipseImg,
  emailImg,
  conactImg,
  whatsUp,
  inst,
  workTime,
  number,
  email,
  cityName,
  contactText,
  socialContact
}) {
  return (
    <div className="col-lg-6">

      <div id="contacts__h3" className="contacts__h3">
        <h3>{contactText}</h3>
      </div>

      <div className="contacts__top">
        <div className="contacts__city">
          <p className="contacts__text">
            {' '}
            <img src={cityImg} alt="City" />
            {' '}
            {cityName}
          </p>
        </div>
        <div className="contacts__number">
          <img className="number__phone" src={phoneImg} alt="Phone" />
          <img className="number__elips" src={ellipseImg} alt="Ellipse" />
          <span className="contacts__text">{number}</span>
        </div>
      </div>

      <div className="contacts__bottom">
        <div className="contacts__email">
          <img className="number__email" src={emailImg} alt="Email" />
          <img className="number__elips" src={ellipseImg} alt="Ellipse" />
          <span className="contacts__text">{email}</span>
        </div>

        <div className="contacts__timeWork">
          <img className="number__time" src={conactImg} alt="Conact" />
          <img className="number__elips" src={ellipseImg} alt="Ellipse" />
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
            {socialContact}
          </h4>
        </div>
        <div className="contact__social_group">
          <button
            type="button"
            className="contacts__whatsup"
          >
            {' '}
            <img src={whatsUp} alt="WhatsUp" />
          </button>
          <button
            type="button"
            className="contacts__inst"
          >
            <img src={inst} alt="Inst" />
          </button>
        </div>
      </div>

    </div>
  );
}

export default ContactView;

ContactView.propTypes = {
  cityImg: PropTypes.string.isRequired,
  phoneImg: PropTypes.string.isRequired,
  ellipseImg: PropTypes.string.isRequired,
  emailImg: PropTypes.string.isRequired,
  conactImg: PropTypes.string.isRequired,
  whatsUp: PropTypes.string.isRequired,
  inst: PropTypes.string.isRequired,
  workTime: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  contactText: PropTypes.string.isRequired,
  socialContact: PropTypes.string.isRequired,
};
