import React from 'react';
import PropTypes from 'prop-types';
import ContactView from './ContactView';
import ContactMap from './ContactMap';

function ContactInfo({
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
    <section className="section__contacts">
      <div className="container-fluid">
        <div className="row">
          <ContactView
            contactText={contactText}
            socialContact={socialContact}
            cityImg={cityImg}
            phoneImg={phoneImg}
            ellipseImg={ellipseImg}
            emailImg={emailImg}
            conactImg={conactImg}
            whatsUp={whatsUp}
            inst={inst}
            workTime={workTime}
            number={number}
            email={email}
            cityName={cityName}
          />
          <ContactMap />
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;

ContactInfo.propTypes = {
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
