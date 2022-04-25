import React from "react";

import Elipse from '../assets/img/Ellipse_Green.png';
import Tree from "../assets/img/Tree.png";
import Bike from "../assets/img/quad_bike.png";
import Helmet from "../assets/img/helmet.png";
import Instructor from "../assets/img/instructor.png";


class OurAdvantages extends React.Component {
    render() {
        return (
            <article className="our-advantages">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-3 col-sm-6">
                            <div className="route">
                                <div className="route__img">
                                    <img className="route__tree" src={Tree} alt="Tree" />
                                    <img className="route__elipse" src={Elipse} alt="Elipse" />
                                </div>
                                <h3 className="route__h3">
                                    Цікаві екскурсії
                                </h3>
                                <p className="route__p">Маршрути від лісових доріжок до бездоріжжя!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="route">
                                <div className="route__img">
                                    <img className="route__tree" src={Bike} alt="Bike" />
                                    <img className="route__elipse" src={Elipse} alt="Elipse" />
                                </div>
                                <h3 className="route__h3">
                                    Цікаві екскурсії
                                </h3>
                                <p className="route__p">Маршрути від лісових доріжок до бездоріжжя!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="route">
                                <div className="route__img">
                                    <img className="route__tree" src={Helmet} alt="Helmet" />
                                    <img className="route__elipse" src={Elipse} alt="Elipse" />
                                </div>
                                <h3 className="route__h3">
                                    Цікаві екскурсії
                                </h3>
                                <p className="route__p">Маршрути від лісових доріжок до бездоріжжя!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="route">
                                <div className="route__img">
                                    <img className="route__tree" src={Instructor} alt="Instructor" />
                                    <img className="route__elipse" src={Elipse} alt="Elipse" />
                                </div>
                                <h3 className="route__h3">
                                    Цікаві екскурсії
                                </h3>
                                <p className="route__p">Маршрути від лісових доріжок до бездоріжжя!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

        );
    }
}

export default OurAdvantages;