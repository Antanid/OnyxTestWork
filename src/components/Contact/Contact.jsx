import React from "react";

import City from "../../assets/img/ContactCity.svg";
import Phone from "../../assets/img/ContactPhone.svg";
import Email from "../../assets/img/ContactEmail.png";
import Conact from "../../assets/img/ContactTime.png";
import Ellipse from "../../assets/img/Ellipse 24.png";
import WhatsUp from "../../assets/img/Whatsup.png";
import Inst from "../../assets/img/Instagram.png";
import ContactView from "./ContactView";
import ContactMap from "./ContactMap";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ' Місто Карпати',
            number:  "+7 928 428-00-62",
            email: ' experience@groupgrand.ru',
            workTime: 'Пн - Пт: 9:00 - 18:00 Сб: 9:00 - 17:00 Вс - вихідний',

        }
    }
    render() {
        return (
            <section className="section__contacts">
                <div className="container-fluid">
                    <div className="row">
                        <ContactView
                            cityName={this.state.city}
                            City={City}
                            Phone={Phone}
                            Ellipse={Ellipse}
                            Email={Email}
                            Conact={Conact}
                            WhatsUp={WhatsUp}
                            Inst={Inst}
                            workTime={this.state.workTime}
                            number={this.state.number}
                            email={this.state.email}
                        />
                        <ContactMap />
                    </div>
                </div>
            </section>
        );
    }
}

export default Contacts;