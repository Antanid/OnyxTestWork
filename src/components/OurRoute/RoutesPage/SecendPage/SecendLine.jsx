import React from 'react';
import PropTypes from 'prop-types';

function SecendLine({Line}) {
    return (
        <div className="col-lg-1">
            <img className="SecondBase__line" src={Line} alt="line" />
        </div>
    )
}

export default SecendLine;

SecendLine.propTypes = {
    Line: PropTypes.node.isRequired
}