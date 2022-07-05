import React from 'react';
import PropTypes from 'prop-types';
import SpecialButton from './SpecialButton';

function SpecialCartSecend({ img, textH3, textP }) {
  return (
    <div className="col-lg-6 col-xs-12">
      <div className="special__offer__secend">

        <div>
          <img className="img__offer" src={img} alt="House" />
        </div>

        <div className="special__text">
          <h3>
            {textH3}
          </h3>
          <p>{textP}</p>
          <SpecialButton />
        </div>
      </div>
    </div>
  );
}

export default SpecialCartSecend;

SpecialCartSecend.propTypes = {
  img: PropTypes.string.isRequired,
  textH3: PropTypes.string.isRequired,
  textP: PropTypes.string.isRequired,
};
