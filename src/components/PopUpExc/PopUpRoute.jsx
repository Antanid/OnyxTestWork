import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Button/Buttons';

function PopUpRoute({
  Line,
  TimeImg,
  RouteImg,
  ComplexitImg,
  LocationImg,
  RouteText,
  TimeText,
  DistanceText,
  complexityText,
  ExcursionHead,
  TimeToRout,
  RoutDistance,
  Complexity,
  RoutText,
  RouteScheme
}) {
  return (
    <div className="col-lg-6">
      <img className="base__line_popup" src={Line} alt="line" />
      <div className="exc__text">
        <h1>{ExcursionHead}</h1>
        <div className="popup_exc_h3">
          <h3>
            {' '}
            <img className="base__ico" src={TimeImg} alt="time" />
            {' '}
            {TimeToRout}
            {' '}
            <span>
              {' '}
              {TimeText}
            </span>
          </h3>
          <h3>
            {' '}
            <img className="base__ico" src={LocationImg} alt="location" />
            {' '}
            {RoutDistance}
            {' '}
            {DistanceText}
            <span />
          </h3>
          <h3>
            <img className="base__ico" src={ComplexitImg} alt="complexity" />
            {Complexity}
            {' '}
            <span>{complexityText}</span>
          </h3>
        </div>
      </div>

      <div className="popup__routes__h4">
        <h4>
          {RoutText}
          <img className="base__icon__route" src={RouteImg} alt="route" />
        </h4>
        <p>{RouteText}</p>
      </div>

      <div className="popup_exc_button">
        <Buttons className="popup_button">
          {RouteScheme}
        </Buttons>
      </div>
    </div>
  );
}

export default PopUpRoute;

PopUpRoute.propTypes = {
  LocationImg: PropTypes.string.isRequired,
  Line: PropTypes.string.isRequired,
  TimeImg: PropTypes.string.isRequired,
  RouteImg: PropTypes.string.isRequired,
  ComplexitImg: PropTypes.string.isRequired,
  RouteText: PropTypes.string.isRequired,
  TimeText: PropTypes.string.isRequired,
  DistanceText: PropTypes.string.isRequired,
  complexityText: PropTypes.string.isRequired,
  ExcursionHead: PropTypes.string.isRequired,
  TimeToRout: PropTypes.string.isRequired,
  RoutDistance: PropTypes.string.isRequired,
  Complexity: PropTypes.string.isRequired,
  RoutText: PropTypes.string.isRequired,
  RouteScheme: PropTypes.string.isRequired,
};
