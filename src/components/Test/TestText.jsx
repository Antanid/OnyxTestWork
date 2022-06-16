import React from 'react';
import PropTypes from 'prop-types';

class TestText extends React.Component {
  render() {
    const { textH3, textH5 } = this.props;
    return (
      <div className="test__text">
        <h3 className="test__h3">{textH3}</h3>
        <h5 className="test__h5">{textH5}</h5>
      </div>
    );
  }
}

export default TestText;

TestText.propTypes = {
  textH3: PropTypes.string.isRequired,
  textH5: PropTypes.string.isRequired,
};
