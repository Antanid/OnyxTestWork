import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ButtonsOur from '../OurRoute/ButtonsOur';

function ThirdPageInfo({
  OpenPopUp,
  Rubl,
  TimeImg,
  Location,
  Complexity,
  Route,
}) {
  const { t } = useTranslation('', { keyPrefix: 'ourRoute' });
  return (
    <div className="col-lg-5">
      <div className="route__base route__base2">

        <div className="base__h2">
          <h2>
            {' '}
            {t('ThirdFirstPageTextBase')}
            <br />
            {' '}
            <span>{t('thirdPagePrice')}</span>
            <img className="base__money" src={Rubl} alt="money" />
          </h2>
        </div>

        <div className="base__h3">
          <h3>
            {' '}
            <img className="base__ico" src={TimeImg} alt="time" />
            {' '}
            {t('PageTextTime')}
            {' '}
            <span>{t('thirdPageTime')}</span>
          </h3>
          <h3>
            {' '}
            <img className="base__ico" src={Location} alt="location" />
            {' '}
            {t('PageTextDistance')}
            {' '}
            <span>{t('thirdPageDistance')}</span>
          </h3>
          <h3>
            <img className="base__ico" src={Complexity} alt="complexity" />
            {t('PageTextComplexity')}
            {' '}
            <span>5***</span>
          </h3>
        </div>

        <div className="base__routes__h4">
          <h4>
            {t('PageTextRoute')}
            <img className="base__icon__route" src={Route} alt="route" />
          </h4>
          <p>{t('thirdPageRoute')}</p>
        </div>

        <ButtonsOur
          firstButton={t('FirstButton')}
          secendButton={t('SecendButton')}
          OpenPopUp={OpenPopUp}
        />
      </div>
    </div>
  );
}

export default ThirdPageInfo;

ThirdPageInfo.propTypes = {
  OpenPopUp: PropTypes.func.isRequired,
  Rubl: PropTypes.string.isRequired,
  TimeImg: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired,
  Complexity: PropTypes.string.isRequired,
  Route: PropTypes.string.isRequired,
};
