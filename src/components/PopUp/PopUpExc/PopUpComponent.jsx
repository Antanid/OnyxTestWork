import React from 'react';
import PropTypes from 'prop-types';

function PopUpComponent({ bikes }) {
  return (
    <>
      {
        bikes.map((item) => (
          <div key={item.bike} className="col-lg-4 col-sm-6">
            <div className="popup__bike">
              <img className="popup__bike__img" src={item.bikeImg} alt="bike" />
              <div className="popup__bike_text">
                <p>{item.bike}</p>
                <h4>
                  {item.price}
                  {' '}
                  <img src={item.imgMoney} alt="rubl" />
                </h4>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}

PopUpComponent.propTypes = {
  bikes: PropTypes.node.isRequired,
};
PopUpComponent.propTypes = {
  bikes: PropTypes.arrayOf(PropTypes.shape({
    bike: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bikeImg: PropTypes.string.isRequired
  })).isRequired
};

export default PopUpComponent;
