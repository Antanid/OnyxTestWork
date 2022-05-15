import React from 'react';
import PropTypes from 'prop-types';


function PopUpSecendHead(props) {
    return (
        <div className="col-lg-12">
            <div className="popup__price">
                <h3>{props.children}</h3>
            </div>
        </div>
    )
}

export default PopUpSecendHead;

PopUpSecendHead.propTypes = {
    children: PropTypes.string.isRequired,
}