import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function HeadText({
  arrow
}) {
  const { t } = useTranslation();
  return (
    <div className="col-lg-7">
      <div className="excursions">
        <div className="excursions_text">
          <h1 className="excursions__h1">
            {t('head.MainText.TextH1')}
          </h1>
          <h2 className="excursions__h2">
            {t('head.MainText.TextH2')}
          </h2>
        </div>
        <div className="excursions__route">
          <button
            type="button"
            className="excursions__button"
          >
            {t('head.MainText.ButtonText')}
            <img className="img__button" src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeadText;

HeadText.propTypes = {
  arrow: PropTypes.string.isRequired
};
