import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function OurAdvComponent({ routes }) {
  const { t } = useTranslation();
  return (
    <article className="our-advantages">
      <div className="container-fluid">
        <div className="row">
          {
            routes.map((item) => (
              <div key={item.id} className="col-lg-3 col-sm-6">
                <div className="route">
                  <div className="route__img">
                    <img className="route__tree" src={item.img} alt="Tree" />
                    <img className="route__elipse" src={item.elipse} alt="Elipse" />
                  </div>
                  <h3 className="route__h3">
                    {t(item.title)}
                  </h3>
                  <p className="route__p">
                    {t(item.description)}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </article>
  );
}

OurAdvComponent.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    elipse: PropTypes.string.isRequired,
  })).isRequired,
};

export default OurAdvComponent;
