import React from 'react';
import ContactView from "./ContactView";
import ContactMap from "./ContactMap";

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
    cityName }) {
    return (
        <section className="section__contacts">
            <div className="container-fluid">
                <div className="row">
                    <ContactView
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
    )
}

export default ContactInfo