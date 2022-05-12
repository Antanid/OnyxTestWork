import React from "react";

import Elipse from '../../assets/img/Ellipse_Green.png';
import Tree from "../../assets/img/Tree.png";
import Bike from "../../assets/img/quad_bike.png";
import Helmet from "../../assets/img/helmet.png";
import OurAdvComponent from "./OurAdvComponent";



class OurAdvantages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            adventures: [
                { fisrtText: 'Цікаві екскурсії', secendText: 'Маршрути від лісових доріжок до бездоріжжя!', img: Tree, elipse: Elipse },
                { fisrtText: 'Цікаві екскурсії', secendText: 'Маршрути від лісових доріжок до бездоріжжя!', img: Bike, elipse: Elipse },
                { fisrtText: 'Цікаві екскурсії', secendText: 'Маршрути від лісових доріжок до бездоріжжя!', img: Helmet, elipse: Elipse },
                { fisrtText: 'Цікаві екскурсії', secendText: 'Маршрути від лісових доріжок до бездоріжжя!', img: Helmet, elipse: Elipse }
            ]
        }
    }
    render() {
        return (
            <article className="our-advantages">
                <div className="container-fluid">
                    <div className="row">
                        <OurAdvComponent routes={this.state.adventures} />
                    </div>
                </div>
            </article>

        );
    }
}

export default OurAdvantages;