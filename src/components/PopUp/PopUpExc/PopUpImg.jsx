import React from 'react';
import PropTypes from 'prop-types';


function PopUpImg({ QuadroFirst, QuadroSecend }) {
    return (
        <div className="col-lg-6">
            <div className="popup_exc__img">
                <img src={QuadroFirst} alt="qadro" />
                <img src={QuadroSecend} alt="qadro" />
            </div>
        </div>
    )
}

export default PopUpImg;

PopUpImg.propTypes = {
    QuadroFirst: PropTypes.string.isRequired,
    QuadroSecend: PropTypes.string.isRequired,
}