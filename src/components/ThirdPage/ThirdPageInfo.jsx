import React from 'react';
import PropTypes from 'prop-types';
import ButtonsOur from '../OurRoute/ButtonsOur';

function ThirdPageInfo({
  OpenPopUp,
  price,
  Rubl,
  TimeImg,
  time,
  Location,
  distance,
  Complexity,
  InfoComplexity,
  Route,
  info
}) {
  return (
    <div className="col-lg-5">
      <div className="route__base route__base2">

        <div className="base__h2">
          <h2>
            {' '}
            EXPERIENCE
            <br />
            {' '}
            <span>{price}</span>
            <img className="base__money" src={Rubl} alt="money" />
          </h2>
        </div>

        <div className="base__h3">
          <h3>
            {' '}
            <img className="base__ico" src={TimeImg} alt="time" />
            {' '}
            ЧАС У ДОРОЗІ
            :
            {' '}
            <span>{time}</span>
          </h3>
          <h3>
            {' '}
            <img className="base__ico" src={Location} alt="location" />
            {' '}
            ВІДСТАНЬ:
            {' '}
            <span>{distance}</span>
          </h3>
          <h3>
            <img className="base__ico" src={Complexity} alt="complexity" />
            СКЛАДНІСТЬ:
            {' '}
            <span>{InfoComplexity}</span>
          </h3>
        </div>

        <div className="base__routes__h4">
          <h4>
            МАРШРУТ
            <img className="base__icon__route" src={Route} alt="route" />
          </h4>
          <p>{info}</p>
        </div>

        <ButtonsOur OpenPopUp={OpenPopUp} />
      </div>
    </div>
  );
}

export default ThirdPageInfo;

ThirdPageInfo.propTypes = {
  OpenPopUp: PropTypes.func.isRequired,
  price: PropTypes.string.isRequired,
  Rubl: PropTypes.string.isRequired,
  TimeImg: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  Complexity: PropTypes.string.isRequired,
  InfoComplexity: PropTypes.string.isRequired,
  Route: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
