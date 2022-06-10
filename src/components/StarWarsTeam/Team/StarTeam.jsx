import React from "react";
import WorldStar from './World'
import PeopleName from "./PeopleName";



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
                <p className="lenght_page">{nextTeam}</p>

                <div>
                    <button className={nextTeam > 1 ? 'PrevButton_page' : 'PrevButton_page_active'} onClick={() => prevPage()}>-</button>
                    <button className={nextTeam < 9 ? 'button_page' : 'button_page_active'} onClick={() => secenPage()}>+</button>
                </div>
            </div>
        );
    }
}

export default StarTeam;