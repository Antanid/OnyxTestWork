import React from "react";
import Buttons from "../Button/Buttons";
import PropTypes from 'prop-types';


class SpecialCartSecend extends React.Component {
    render() {
        const { img, textH3, textP } = this.props;
        return (
            <div className="col-lg-6 col-xs-12">
                <div className="special__offer__secend">

                    <div>
                        <img className="img__offer" src={img} alt="House" />
                    </div>

                    <div className="special__text">
                        <h3>{textH3}
                        </h3>
                        <p>{textP}</p>
                        <div className="spec__but">
                            <Buttons className={"spec__offer__but"}>Докладніше</Buttons>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SpecialCartSecend;

SpecialCartSecend.propTypes = {
    img: PropTypes.string.isRequired,
    textH3: PropTypes.string.isRequired,
    textP: PropTypes.string.isRequired,
}