import React from 'react';
import PropTypes from 'prop-types';
import ButtonGift from './ButtonGift';

function GiftText({ text }) {
  return (
    <div className="col-lg-6 col-xs-12">
      <div className="gift__all">
        <div className="gift__text">
          <h5>{text}</h5>
        </div>
        <ButtonGift />
      </div>
    </div>
  );
}

export default GiftText;

GiftText.propTypes = {
  text: PropTypes.string.isRequired
};
