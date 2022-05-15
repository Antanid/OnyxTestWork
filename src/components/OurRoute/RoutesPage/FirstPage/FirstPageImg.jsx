import React from 'react';
import PropTypes from 'prop-types';


function SecendPage({ Qadro, QadroSecend, QadroThird }) {
    return (
        <div className="col-lg-6 col-sm-12">

            <div className="our__route__img">
                <div className="carousel-slider">
                    <section id="slider">
                        <input readOnly type="radio" name="slider-1" id="s1" checked />
                        <input readOnly type="radio" name="slider-1" id="s2" />
                        <input readOnly type="radio" name="slider-1" id="s3" />

                        <label htmlFor="s1" id="slide1">
                            <div className="slider-image">
                                <img src={Qadro} alt="qadro" />
                            </div>
                        </label>
                        <label htmlFor="s2" id="slide2">
                            <div className="slider-image">
                                <img src={QadroSecend} alt="qadro" />
                            </div>
                        </label>
                        <label htmlFor="s3" id="slide3">
                            <div className="slider-image">
                                <img src={QadroThird} alt="qadro" />
                            </div>
                        </label>
                    </section>
                </div>
            </div>



        </div>
    )
}

export default SecendPage;

SecendPage.propTypes = {
    Qadro: PropTypes.string.isRequired,
    QadroSecend: PropTypes.string.isRequired,
    QadroThird: PropTypes.string.isRequired,
}

