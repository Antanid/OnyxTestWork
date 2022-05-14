import React from "react";

import City from "../../assets/img/ContactCity.svg";
import Phone from "../../assets/img/ContactPhone.svg";
import Email from "../../assets/img/ContactEmail.png";
import Conact from "../../assets/img/ContactTime.png";
import Ellipse from "../../assets/img/Ellipse 24.png";
import WhatsUp from "../../assets/img/Whatsup.png";
import Inst from "../../assets/img/Instagram.png";
import ContactView from "./ContactView";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ' Місто Карпати',
            number: " +7 928 428-00-62",
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
                        <div className="col-lg-6">
                            <div className="map-responsive">
                                <iframe
                                    title="map"
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