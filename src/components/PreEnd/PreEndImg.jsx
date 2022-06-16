import React from 'react';
import PropTypes from 'prop-types';

class PreEndImg extends React.Component {
  render() {
    const { Footer } = this.props;
    return (
      <div className="col-lg-2 col-sm-6">
        <div className="footer__logo">
          <img src={Footer} alt="Footer" />
        </div>
      </div>
    );
  }
}

export default PreEndImg;

PreEndImg.propTypes = {
  Footer: PropTypes.string.isRequired,
};
