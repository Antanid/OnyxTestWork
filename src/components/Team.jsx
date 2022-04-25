import React from "react";

import Julia from "../assets/img/Julia.svg";
import Maksim from "../assets/img/Maksim.svg";
import Juriy from "../assets/img/Juriy.svg" ;
import Kristina from "../assets/img/Kristina.svg";

class Team extends React.Component {
    render() {
        return (
            <section className="section__team">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="our__team">
                                <h2>Наша команда</h2>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="team">
                                <div className="team__photo">
                                    <img src={Julia} alt="Julia" />
                                </div>
                                <div className="team__text">
                                    <h5>Юліана</h5>
                                    <p>керівник</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6">
                            <div className="team">
                                <div className="team__photo">
                                    <img src={Maksim} alt="Maksim" />
                                </div>
                                <div className="team__text">
                                    <h5>Максим</h5>
                                    <p>старший інструктор </p>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-3 col-sm-6">
                            <div className="team">
                                <div className="team__photo">
                                    <img src={Kristina} alt="Kristina" />
                                </div>
                                <div className="team__text">
                                    <h5>Христина</h5>
                                    <p>адміністратор</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-6">
                            <div className="team">
                                <div className="team__photo">
                                    <img src={Juriy} alt="Juriy" />
                                </div>
                                <div className="team__text">
                                    <h5>Юрій</h5>
                                    <p>Старший механік
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </section>
        );
    }
}

export default Team;