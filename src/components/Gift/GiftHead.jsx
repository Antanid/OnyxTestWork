import React from 'react';
import PropTypes from 'prop-types';

class GiftHead extends React.Component {
  render() {
    const { giftH2, texth5, texth5Part2 } = this.props;
    return (
      <div className="col-lg-12 col-xs-12">
        <div className="gift__head">
          <h2>
            {giftH2}
          </h2>
          <h5>
            {texth5}
            <br />
            {texth5Part2}
          </h5>
        </div>
      </div>
    );
  }
}

export default GiftHead;

GiftHead.propTypes = {
  giftH2: PropTypes.string.isRequired,
  texth5: PropTypes.string.isRequired,
  texth5Part2: PropTypes.string.isRequired,
};
