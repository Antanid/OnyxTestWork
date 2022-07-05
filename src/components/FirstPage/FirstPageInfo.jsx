import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ButtonsOur from '../OurRoute/ButtonsOur';

function FirstPage({
  OpenPopUp,
  Route,
  Rubl,
  TimeImg,
  Location,
  Complexity,
}) {
  const { t } = useTranslation();
  return (
    <div className="col-lg-5">

      <div className="route__base">
        <div className="base__h2">
          <h2>
            {' '}
            {t('ourRoute.FirstPageTextBase')}
            <br />
            {' '}
            <span>
              {t('ourRoute.FirstPagePrice')}
              {' '}
            </span>
            <img className="base__money" src={Rubl} alt="money" />
          </h2>
        </div>

        <div className="base__h3">
          <h3>
            {' '}
            <img className="base__ico" src={TimeImg} alt="time" />
            {' '}
            {t('ourRoute.PageTextTime')}
            {' '}
            <span>{t('ourRoute.FirstPageTime')}</span>
          </h3>
          <h3>
            {' '}
            <img className="base__ico" src={Location} alt="location" />
            {' '}
            {t('ourRoute.PageTextDistance')}
            {' '}
            <span>{t('ourRoute.FirstPageDistance')}</span>
          </h3>
          <h3>
            <img className="base__ico" src={Complexity} alt="complexity" />
            {t('ourRoute.PageTextComplexity')}
            {' '}
            <span>
              5***
            </span>
          </h3>
        </div>

        <div className="base__routes__h4">
          <h4>
            {t('ourRoute.PageTextRoute')}
            <img className="base__icon__route" src={Route} alt="route" />
          </h4>
          <p>
            {t('ourRoute.FirstPageRoute')}
          </p>
        </div>
        <ButtonsOur
          firstButton={t('ourRoute.FirstButton')}
          secendButton={t('ourRoute.SecendButton')}
          OpenPopUp={OpenPopUp}
        />
      </div>
    </div>
  );
}

export default FirstPage;

FirstPage.propTypes = {
  OpenPopUp: PropTypes.func.isRequired,
  Rubl: PropTypes.string.isRequired,
  TimeImg: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired,
  Complexity: PropTypes.string.isRequired,
  Route: PropTypes.string.isRequired,
};
