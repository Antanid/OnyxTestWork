import React from 'react';
import PropTypes from 'prop-types';

function PopUpRoute({
  Line, TimeImg, RouteImg, ComplexitImg, LocationImg, RouteText, TimeText, DistanceText, complexityText
}) {
  return (
    <div className="col-lg-6">
      <img className="base__line_popup" src={Line} alt="line" />
      <div className="exc__text">
        <h1>Екскурсія “РИО”</h1>
        <div className="popup_exc_h3">
          <h3>
            {' '}
            <img className="base__ico" src={TimeImg} alt="time" />
            {' '}
            ЧАС У ДОРОЗІ:
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
            ВІДСТАНЬ:
            {' '}
            {DistanceText}
            <span />
          </h3>
          <h3>
            <img className="base__ico" src={ComplexitImg} alt="complexity" />
            СКЛАДНІСТЬ:
            {' '}
            <span>{complexityText}</span>
          </h3>
        </div>
      </div>

      <div className="popup__routes__h4">
        <h4>
          МАРШРУТ
          <img className="base__icon__route" src={RouteImg} alt="route" />
        </h4>
        <p>{RouteText}</p>
      </div>

      <div className="popup_exc_button">
        <button
          type="button"
          className="popup_button"
        >
          Схема маршруту
        </button>
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
  complexityText: PropTypes.string.isRequired
};