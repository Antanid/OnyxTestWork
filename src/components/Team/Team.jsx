import React from "react";

import OurTeam from "./OurTeam";

class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            team: [
                { name: "Юліана", profession: "керівник", img: "../img/Julia.svg" },
                { name: "Максим", profession: "старший інструктор", img: "../img/Maksim.svg" },
                { name: "Христина", profession: "адміністратор", img: "../img/Kristina.svg" },
                { name: "Юрій", profession: "Старший механік", img: "../img/Juriy.svg" },
            ]
        }
    }
    render() {

        return (
            <section className="section__team">
                <div className="container">
                    <OurTeam state={this.state.team} />
                </div>


            </section>
        );
    }
}

export default Team;