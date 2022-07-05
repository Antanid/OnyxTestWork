import React from 'react';
import PropTypes from 'prop-types';
import ContactView from './ContactView';
import ContactMap from './ContactMap';

function ContactInfo({
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
  cityName,
  ContactText,
  SocialContact
}) {
  return (
    <section className="section__contacts">
      <div className="container-fluid">
        <div className="row">
          <ContactView
            ContactText={ContactText}
            SocialContact={SocialContact}
            CityImg={CityImg}
            PhoneImg={PhoneImg}
            EllipseImg={EllipseImg}
            EmailImg={EmailImg}
            ConactImg={ConactImg}
            WhatsUp={WhatsUp}
            Inst={Inst}
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
  ContactText: PropTypes.string.isRequired,
  SocialContact: PropTypes.string.isRequired,
};
