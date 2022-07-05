import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function ServiceText({ text }) {
  const { t } = useTranslation();
  return (
    <>
      {
        text.map((item) => (
          <div key={item.id} className="col-lg-4">
            <div className="services__block">
              <div className="services__icon">
                <img src={item.img} alt="" />
              </div>
              <div className="services__text">
                <p>
                  {t(item.text)}
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default ServiceText;

ServiceText.defaultProps = {
  text: PropTypes.arrayOf(PropTypes.shape({
    text: 'Text',
    img: PropTypes.string.isRequired,
  })),
};

ServiceText.propTypes = {
  text: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })),
};
