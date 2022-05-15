import React from "react";

import FirstPhoto from "../../assets/img/Photo.svg";
import SecendPhoto from "../../assets/img/Photo.svg";
import ThirdPhoto from "../../assets/img/Photo3.svg";
import FourPhoto from "../../assets/img/ThirdRout.svg";
import FivePhoto from "../../assets/img/ThirdRout2.svg";
import PhotoText from "./PhotoText";
import PhotoSlider from "./PhotoSlider";

class Photo extends React.Component {
    render() {
        return (
            <section className="section__photo">
                <div className="container-fluid">
                    <div className="row">
                        <PhotoText>Фото</PhotoText>
                        <PhotoSlider
                            FirstPhoto={FirstPhoto}
                            SecendPhoto={SecendPhoto}
                            ThirdPhoto={ThirdPhoto}
                            FourPhoto={FourPhoto}
                            FivePhoto={FivePhoto}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Photo;