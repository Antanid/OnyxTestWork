import React from 'react';
import PropTypes from 'prop-types';

function QuestAdditional({ children }) {
  return (
    <div className="col-lg-12">
      <div className="Additional">
        <h4>{children}</h4>
      </div>
    </div>
  );
}

export default QuestAdditional;

QuestAdditional.propTypes = {
  children: PropTypes.string.isRequired,
};
