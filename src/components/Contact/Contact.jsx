import React from "react";

import City from "../../assets/img/ContactCity.svg";
import Phone from "../../assets/img/ContactPhone.svg";
import Email from "../../assets/img/ContactEmail.png";
import Conact from "../../assets/img/ContactTime.png";
import Ellipse from "../../assets/img/Ellipse 24.png";
import WhatsUp from "../../assets/img/Whatsup.png";
import Inst from "../../assets/img/Instagram.png";

import ContactInfo from "./ContactInfo";

import './Style.scss'


class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            City: City,
            Phone: Phone,
            Email: Email,
            Connact: Conact,
            Ellipse: Ellipse,
            WhatsUp: WhatsUp,
            Inst: Inst,
            city: ' Місто Карпати',
            number: "+7 928 428-00-62",
            email: ' experience@groupgrand.ru',
            workTime: 'Пн - Пт: 9:00 - 18:00 Сб: 9:00 - 17:00 Вс - вихідний',

        }
    }
    render() {
        return (
            <ContactInfo
                CityImg={this.state.City}
                PhoneImg={this.state.Phone}
                EllipseImg={this.state.Ellipse}
                EmailImg={this.state.Email}
                ConactImg={this.state.Connact}
                WhatsUp={this.state.WhatsUp}
                Inst={this.state.Inst}
                workTime={this.state.workTime}
                number={this.state.number}
                email={this.state.email}
                cityName={this.state.city}
            />
        );
    }
}

export default Contacts;