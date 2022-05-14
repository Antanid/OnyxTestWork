import React from "react";


class PhotoSlider extends React.Component {
    render() {
        const { FirstPhoto, SecendPhoto, ThirdPhoto, FourPhoto, FivePhoto } = this.props
        return (
            <div className="col-lg-12">
                <div className="carousel">

                    <section id="slider-photo">
                        <input readOnly type="radio" name="slider-photo" id="s1-photo" />
                        <input readOnly type="radio" name="slider-photo" id="s2-photo" checked />
                        <input readOnly type="radio" name="slider-photo" id="s3-photo" />
                        <input readOnly type="radio" name="slider-photo" id="s4-photo" />
                        <input readOnly type="radio" name="slider-photo" id="s5-photo" />

                        <label htmlFor="s1-photo" id="slide1">
                            <div className="slider-image">
                                <img src={FirstPhoto} alt="qadro" />
                            </div>
                        </label>
                        <label htmlFor="s2-photo" id="slide2">
                            <div className="slider-image">
                                <img src={SecendPhoto} alt="qadro" />
                            </div>
                        </label>
                        <label htmlFor="s3-photo" id="slide3">
                            <div className="slider-image">
                                <img src={ThirdPhoto} alt="qadro" />
                            </div>
                        </label>

                        <label htmlFor="s4-photo" id="slide4">
                            <div className="slider-image">
                                <img src={FourPhoto} alt="qadro" />
                            </div>
                        </label>

                        <label htmlFor="s5-photo" id="slide5">
                            <div className="slider-image">
                                <img src={FivePhoto} alt="qadro" />
                            </div>
                        </label>

                    </section>
                </div>

            </div>
        );
    }
}

export default PhotoSlider;