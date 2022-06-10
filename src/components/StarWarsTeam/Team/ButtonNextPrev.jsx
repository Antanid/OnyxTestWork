import React from 'react';
import PropTypes from 'prop-types';

function ButtonNextPrev({ nextTeam, secenPage, prevPage }) {
    return (
        <div>
            <p className="lenght_page">{nextTeam}</p>
            <button className={nextTeam > 1 ? 'PrevButton_page' : 'PrevButton_page_active'} onClick={() => prevPage()}>-</button>
            <button className={nextTeam < 9 ? 'button_page' : 'button_page_active'} onClick={() => secenPage()}>+</button>
        </div>
    )
}

export default ButtonNextPrev;



ButtonNextPrev.propTypes = {
    nextTeam: PropTypes.number.isRequired,
    secenPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
}