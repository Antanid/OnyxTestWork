import React from 'react';

import City from '../../assets/img/ContactCity.svg';
import Phone from '../../assets/img/ContactPhone.svg';
import Email from '../../assets/img/ContactEmail.png';
import Conact from '../../assets/img/ContactTime.png';
import Ellipse from '../../assets/img/Ellipse 24.png';
import WhatsUp from '../../assets/img/Whatsup.png';
import Inst from '../../assets/img/Instagram.png';

import ContactInfo from './ContactInfo';

import './sass/Style.scss';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Connact: Conact,
      city: ' Місто Карпати',
      number: '+7 928 428-00-62',
      email: ' experience@groupgrand.ru',
      workTime: 'Пн - Пт: 9:00 - 18:00 Сб: 9:00 - 17:00 Вс - вихідний',

    };
  }

  render() {
    const {
      Connact, city, number, email, workTime
    } = this.state;
    return (
      <ContactInfo
        CityImg={City}
        PhoneImg={Phone}
        EllipseImg={Ellipse}
        EmailImg={Email}
        ConactImg={Connact}
        WhatsUp={WhatsUp}
        Inst={Inst}
        workTime={workTime}
        number={number}
        email={email}
        cityName={city}
      />
    );
  }
}

export default Contacts;
