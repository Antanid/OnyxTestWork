import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function OurTeam({ team }) {
  const { t } = useTranslation();
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="our__team">
          <h2>{t('team.OurTeam')}</h2>
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
                <h5>
                  {t(items.name)}
                </h5>
                <p>{t(items.profession)}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

OurTeam.propTypes = {
  team: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
  })).isRequired,
};

export default OurTeam;
