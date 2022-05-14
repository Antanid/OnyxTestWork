import React from 'react'

function PopUpInterested({ HeaderText, FirstPartText, SecendPartText }) {
    return (
        <div className="col-lg-12">
            <div className="popup__text__see">
                <h3>{HeaderText}</h3>
            </div>
            <div className="popup_text__see_p">
                <div className="popup__text__firstPart">
                    <p>{FirstPartText}</p>
                </div>
                <div className="popup__text__secendPart">
                    <p>{SecendPartText}</p>
                </div>

            </div>
        </div>
    )
}

export default PopUpInterested