import React from "react";

import servicePhoto from "../../assets/img/ServicICON.svg";
import ServiceText from "./ServiceText";
import ServiceHead from "./ServiceHead";
import ServiceSpanText from "./ServiceSpanText";

import './Style.scss';


class Service extends React.Component {
    constructor() {
        super();
        this.state = {
            serviceTextWithoutSpan: [
                { text: 'При прокаті або оренді суворо дотримуватися правил техніки безпеки та все вимоги інструктора!', img: servicePhoto },
                { text: ' Управління здійснюйте у міру своїх сил та можливостей. Не переоцінюйте себе! Це небезпечно!', img: servicePhoto },
                { text: 'Перед кожним катанням досвідчений інструктор навчить Вас основ управління та буде супроводжувати протягом усього маршруту.', img: servicePhoto },
                { text: 'При прокаті або оренді суворо дотримуватися правил техніки безпеки та все вимоги інструктора!', img: servicePhoto },
            ],
            serviceTextWithSpan: [
                { textAfter: 'До управління ', span: 'НЕ ДОПУСКАЮТЬСЯ', textBefore: "особи молодше 16 років та особи в алкогольному сп'яніння!", img: servicePhoto },
                { textAfter: 'Розпивати спиртні напої під час прокату, оренди', span: 'ЗАБОРОНЕНО!', textBefore: "(Після?) На ваш розсуд", img: servicePhoto },
            ]
        }
    }



    render() {
        return (
            <section className="services">
                <div className="container">
                    <div className="row">
                        <ServiceHead>Умови надання послуг</ServiceHead>
                        <ServiceSpanText textSpan={this.state.serviceTextWithSpan} />
                        <ServiceText text={this.state.serviceTextWithoutSpan} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;