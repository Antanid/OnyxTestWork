import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function ServiceSpanText({ textSpan }) {
  return (
    <>
      {
        textSpan.map((item) => (
          <div key={item.textAfter} className="col-lg-4">
            <div className="services__block">
              <div className="services__icon">
                <img src={item.img} alt="" />
              </div>
              <div className="services__text">
                <p>
                  {item.textAfter}
                  <span>{item.span}</span>
                  {' '}
                  {item.textBefore}
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
