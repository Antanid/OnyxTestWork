import React from "react";

class OurTeam extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="our__team">
                        <h2>Наша команда</h2>
                    </div>
                </div>
                {
                    this.props.state.map((items, index) => (
                        <div key={index} className="col-lg-3 col-sm-6">
                            <div className="team">
                                <div className="team__photo">
                                    <img src={items.img} alt="Julia" />
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
export default OurTeam;