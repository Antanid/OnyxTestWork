import React from "react";
import PropTypes from 'prop-types';



class OurTeam extends React.Component {
    render() {
        const {team} = this.props
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
                                <div className="team__photo">
                                    <img src={items.img} alt="team_photo" />
                                </div>
                                <div className="team__text">
                                    <h5>{items.name}</h5>
                                    <p>{items.profession}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}


OurTeam.propTypes = {
    team: PropTypes.node.isRequired,
}
OurTeam.propTypes = {
    team: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        profession: PropTypes.string.isRequired,
    }))
}


export default OurTeam;