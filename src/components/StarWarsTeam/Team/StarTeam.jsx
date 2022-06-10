import React from "react";
import WorldStar from './WorldStar/World'
import PeopleName from "./PeopleName";
import PropTypes from 'prop-types';
import ButtonNextPrev from "./ButtonNextPrev";


class StarTeam extends React.Component {

    render() {
        const { secenPage, prevPage, nextTeam, team } = this.props;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="our__team">
                        <h2>Наша команда</h2>
                    </div>
                </div>

                {
                    team.map((items, index) => (
                        <div key={index} className="col-lg-3 col-sm-6">
                            <div className="team">
                                <div className="team__text">
                                    <PeopleName items={items} />
                                    <WorldStar
                                        nextTeam={nextTeam}
                                        world={items.homeworld} />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <ButtonNextPrev
                    prevPage={prevPage}
                    secenPage={secenPage}
                    nextTeam={nextTeam} />
            </div>
        );
    }
}

export default StarTeam;



StarTeam.propTypes = {
    nextTeam: PropTypes.number.isRequired,
    team: PropTypes.array.isRequired,
    secenPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
}