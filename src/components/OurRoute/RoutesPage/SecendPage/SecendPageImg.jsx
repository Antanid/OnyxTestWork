import React from 'react';
import PropTypes from 'prop-types';

function SecendPageImg({ SecendQadroFirst, SecendQadroSecend, SecendQadroThird }) {
    return (
        <div className="col-lg-6 col-sm-12">
            <div className="SecondRout__img">
                <div className="carousel-slider-2">
                    <section id="slider-2">
                        <input readOnly type="radio" name="slider-2" id="s1-2" checked />
                        <input readOnly type="radio" name="slider-2" id="s2-2" />
                        <input readOnly type="radio" name="slider-2" id="s3-2" />

                        <label htmlFor="s1-2" id="slide1-2">
                            <div className="slider-image">
                                <img src={SecendQadroFirst} alt="qadro" />
                            </div>
                        </label>
                        <label htmlFor="s2-2" id="slide2-2">
                            <div className="slider-image">
                                <img src={SecendQadroSecend} alt="qadro" />
                            </div>
                        </label>
                        <label htmlFor="s3-2" id="slide3-2">
                            <div className="slider-image">
                                <img src={SecendQadroThird} alt="qadro" />
                            </div>
                        </label>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SecendPageImg;

SecendPageImg.propTypes = {
    SecendQadroFirst: PropTypes.string.isRequired,
    SecendQadroSecend: PropTypes.string.isRequired,
    SecendQadroThird: PropTypes.string.isRequired,
}