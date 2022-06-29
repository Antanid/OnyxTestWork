import React from 'react';
import PropTypes from 'prop-types';

function OurTeam({ team }) {
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

OurTeam.defaultProps = {
  team: PropTypes.arrayOf(PropTypes.shape({
    name: 'Name',
    profession: 'Profession',
  }))
};
OurTeam.propTypes = {
  team: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
  }))
};

export default OurTeam;
