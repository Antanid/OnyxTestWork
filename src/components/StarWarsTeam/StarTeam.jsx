import React from 'react';
import PropTypes from 'prop-types';
import WorldStar from './World';
import PeopleName from './PeopleName';
import ButtonNextPrev from './ButtonNextPrev';

class StarTeam extends React.Component {
  render() {
    const {
      secenPage, prevPage, nextTeam, team
    } = this.props;
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="our__team">
            <h2>Наша команда</h2>
          </div>
        </div>

        {
                    team.map((items) => (
                      <div key={items.name} className="col-lg-3 col-sm-6">
                        <div className="team">
                          <div className="team__text">
                            <PeopleName items={items} />
                            <WorldStar
                              nextTeam={nextTeam}
                              world={items.homeworld}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                }
        <ButtonNextPrev
          prevPage={prevPage}
          secenPage={secenPage}
          nextTeam={nextTeam}
        />
      </div>
    );
  }
}

export default StarTeam;

StarTeam.propTypes = {
  team: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    homeworld: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  })).isRequired,
  secenPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextTeam: PropTypes.number.isRequired,
};
