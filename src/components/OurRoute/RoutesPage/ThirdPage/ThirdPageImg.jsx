import React from 'react'

function ThirdPageImg({ThirdQadroFirst, ThirdQadroSecend, ThirdQadroThird}) {
    return (
        <div className="col-lg-6 col-sm-12">
            <div className="our__route__img our__route__img2">

                <div className="carousel-slider-3">
                    <section id="slider-3">
                        <input readOnly type="radio" name="slider-3" id="s1-3" checked />
                        <input readOnly type="radio" name="slider-3" id="s2-3" />
                        <input readOnly type="radio" name="slider-3" id="s3-3" />

                        <label htmlFor="s1-3" id="slide1-3">
                            <div className="slider-image">
                                <img src={ThirdQadroFirst} alt="qadro" />
                            </div>
                        </label>
                        <label htmlFor="s2-3" id="slide2-3">
                            <div className="slider-image">
                                <img src={ThirdQadroSecend} alt="qadro" />

                            </div>
                        </label>
                        <label htmlFor="s3-3" id="slide3-3">
                            <div className="slider-image">
                                <img src={ThirdQadroThird} alt="qadro" />
                            </div>
                        </label>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default ThirdPageImg