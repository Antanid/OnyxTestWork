import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Button/Buttons';

class GiftText extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className="col-lg-6 col-xs-12">
        <div className="gift__all">
          <div className="gift__text">
            <h5>{text}</h5>
          </div>
          <Buttons className="gift__button">Підберемо сертифікат для вас</Buttons>
        </div>
      </div>
    );
  }
}

export default GiftText;

GiftText.propTypes = {
  text: PropTypes.string.isRequired
};
