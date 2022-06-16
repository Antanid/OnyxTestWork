import React from 'react';
import PropTypes from 'prop-types';

class HeadText extends React.Component {
  render() {
    const {
      arrow, textH1, textH2, buttonText
    } = this.props;
    return (
      <div className="col-lg-7">
        <div className="excursions">
          <div className="excursions_text">
            <h1 className="excursions__h1">
              {textH1}
            </h1>
            <h2 className="excursions__h2">{textH2}</h2>
          </div>
          <div className="excursions__route">
            <button
              type="button"
              className="excursions__button"
            >
              {buttonText}
              <img className="img__button" src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeadText;

HeadText.propTypes = {
  arrow: PropTypes.string.isRequired,
  textH1: PropTypes.string.isRequired,
  textH2: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};
