import React from 'react';
import Buttons from "../../../Button/Buttons";
import PropTypes from 'prop-types';

function SecendPageInfo({ setActive, price, Rubl, TimeImg, time, Location, distance, Complexity, InfoComplexity, Route, info }) {
    return (
        <div className="col-lg-5">
            <div className="SecondRoute__base">

                <div className="base__h2">
                    <h2> РОЗШИРЕНИЙ <br /> <span>{price}</span>
                        <img className="base__money" src={Rubl} alt="money" />
                    </h2>
                </div>

                <div className="base__h3">
                    <h3> <img className="base__ico" src={TimeImg} alt="time" /> ЧАС У ДОРОЗІ
                        : <span>{time}</span></h3>
                    <h3> <img className="base__ico" src={Location} alt="location" /> ВІДСТАНЬ: <span>{distance}</span></h3>
                    <h3><img className="base__ico" src={Complexity} alt="complexity" />СКЛАДНІСТЬ: <span>{InfoComplexity}</span></h3>
                </div>

                <div className="base__routes__h4">
                    <h4>МАРШРУТ <img className="base__icon__route" src={Route} alt="route" /></h4>
                    <p>{info}</p>
                </div>

                <div className="base__routes__button base__routes__buttonSecond">
                    <Buttons className={"base__button__moreInf open-popup-exc"} Click={() => setActive(true)} >Докладніше</Buttons>
                    <Buttons className={"base__button__moreInf open-popup-exc"} Click={() => setActive(true)} >Забронювати</Buttons>
                </div>

            </div>
        </div>
    )
}

export default SecendPageInfo;

SecendPageInfo.propTypes = {
    setActive: PropTypes.func,
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
}

