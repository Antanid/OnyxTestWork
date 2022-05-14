import React from "react";

import evacuation from "../../assets/img/additional1.svg";
import Photo from "../../assets/img/additional2.svg";
import Transp from "../../assets/img/additional3.svg";
import CheckUp from "../../assets/img/additional4.svg";
import Corpotartion from "../../assets/img/additional5.svg";
import Keitering from "../../assets/img/additional6.svg";
import Route from "../../assets/img/additional7.svg";
import Services from "../../assets/img/additional8.svg";
import AdditionalComp from "./AdditionalComp";


class Additional extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                { text: 'Евакуація, ремонт квадроциклів', img: evacuation },
                { text: 'Фото, відеозйомка', img: Photo },
                { text: 'Транспортування техніки', img: Transp },
                { text: 'Заправка, чекап, мийка', img: CheckUp },
                { text: 'Корпоративи, тимбілдінги', img: Corpotartion },
                { text: 'Виїзний кейтеринг', img: Keitering },
                { text: 'Індивідуальні маршрути', img: Route },
                { text: 'Послуги, гідні маршрути', img: Services },
            ]
        }
    }
    render() {
        return (
            <section className="section__additional">
                <div className="container-fluid">
                    <div className="row">
                        <AdditionalComp service={this.state.services} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Additional;