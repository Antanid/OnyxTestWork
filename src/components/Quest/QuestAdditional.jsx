import React from 'react';
import PropTypes from 'prop-types';


function QuestAdditional(props) {
    return (
        <div className="col-lg-12">
            <div className="Additional">
                <h4>{props.children}</h4>
            </div>
        </div>
    )
}

export default QuestAdditional;

QuestAdditional.propTypes = {
    children: PropTypes.string.isRequired,
}