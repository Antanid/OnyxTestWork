import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function PopUpComponent({ bikes }) {
    return (
        <Fragment>
            {
                bikes.map((item, index) => (
                    <div key={index} className="col-lg-4 col-sm-6">
                        <div className="popup__bike">
                            <img className="popup__bike__img" src={item.bikeImg} alt="bike" />
                            <div className="popup__bike_text">
                                <p>{item.bike}</p>
                                <h4>{item.price} <img src={item.imgMoney} alt="rubl" /></h4>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Fragment>
    )
}

PopUpComponent.propTypes = {
    bikes: PropTypes.node.isRequired,
}
PopUpComponent.propTypes = {
    bikes: PropTypes.arrayOf(PropTypes.shape({
        bike: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }))
}

export default PopUpComponent