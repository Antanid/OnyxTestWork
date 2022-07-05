import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function ServiceSpanText({ textSpan }) {
  const { t } = useTranslation();
  return (
    <>
      {
        textSpan.map((item) => (
          <div key={t(item.textAfter)} className="col-lg-4">
            <div className="services__block">
              <div className="services__icon">
                <img src={item.img} alt="" />
              </div>
              <div className="services__text">
                <p>
                  {t(item.textAfter)}
                  <span>{t(item.span)}</span>
                  {' '}
                  {t(item.textBefore)}
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default ServiceSpanText;

ServiceSpanText.defaultProps = {
  textSpan: PropTypes.arrayOf(PropTypes.shape({
    textAfter: 'TextAfter',
    span: 'TextSpan',
    img: PropTypes.string.isRequired,
  }))
};

ServiceSpanText.propTypes = {
  textSpan: PropTypes.arrayOf(PropTypes.shape({
    textAfter: PropTypes.string.isRequired,
    span: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }))
};
