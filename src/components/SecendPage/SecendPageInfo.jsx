import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ButtonsOur from '../OurRoute/ButtonsOur';

function SecendPageInfo({
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
      <div className="SecondRoute__base">

        <div className="base__h2">
          <h2>
            {' '}
            {t('SecendPageTextBase')}
            <br />
            {' '}
            <span>{t('secendPagePrice')}</span>
            <img className="base__money" src={Rubl} alt="money" />
          </h2>
        </div>

        <div className="base__h3">
          <h3>
            {' '}
            <img className="base__ico" src={TimeImg} alt="time" />
            {' '}
            {t('PageTextTime')}
            :
            {' '}
            <span>{t('secendPageTime')}</span>
          </h3>
          <h3>
            {' '}
            <img className="base__ico" src={Location} alt="location" />
            {' '}
            {t('PageTextDistance')}
            {' '}
            <span>{t('secendPageDistance')}</span>
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
          <p>
            {t('secendPageRoute')}
          </p>
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

export default SecendPageInfo;

SecendPageInfo.propTypes = {
  OpenPopUp: PropTypes.func.isRequired,
  Rubl: PropTypes.string.isRequired,
  TimeImg: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired,
  Complexity: PropTypes.string.isRequired,
  Route: PropTypes.string.isRequired,
};
