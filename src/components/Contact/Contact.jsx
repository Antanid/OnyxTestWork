import React from 'react';
import { useTranslation } from 'react-i18next';

import City from '../../assets/img/ContactCity.svg';
import Phone from '../../assets/img/ContactPhone.svg';
import Email from '../../assets/img/ContactEmail.png';
import Conact from '../../assets/img/ContactTime.png';
import Ellipse from '../../assets/img/Ellipse 24.png';
import WhatsUp from '../../assets/img/Whatsup.png';
import Inst from '../../assets/img/Instagram.png';

import ContactInfo from './ContactInfo';

import './sass/Style.scss';

function Contacts() {
  const { t } = useTranslation();
  return (
    <ContactInfo
      CityImg={City}
      PhoneImg={Phone}
      EllipseImg={Ellipse}
      EmailImg={Email}
      ConactImg={Conact}
      WhatsUp={WhatsUp}
      Inst={Inst}
      workTime={t('contacts.WorkTime')}
      number="+380 662 98-00-62"
      email="experience@groupgrand.ua"
      cityName={t('contacts.CityName')}
      ContactText={t('contacts.ContactText')}
      SocialContact={t('contacts.SocialContact')}
    />
  );
}

export default Contacts;
