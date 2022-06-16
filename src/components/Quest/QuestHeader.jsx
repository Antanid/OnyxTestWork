import React from 'react';
import PropTypes from 'prop-types';

function QuestHeader({ children }) {
  return (
    <div className="col-lg-12">
      <div id="questions__head" className="questions__head">
        <h2>
          {children}
        </h2>
      </div>
    </div>
  );
}

export default QuestHeader;

QuestHeader.propTypes = {
  children: PropTypes.string.isRequired,
};
