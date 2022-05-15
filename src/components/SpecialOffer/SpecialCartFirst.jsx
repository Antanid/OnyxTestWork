import React from "react";
import PropTypes from 'prop-types';


class SpecialCartFirst extends React.Component {
    render() {
        const { img, textH3, textSpan, textP } = this.props;
        return (
            <div className="col-lg-6 col-xs-12">
                <div className="special__offer__all">

                    <div>
                        <img className="img__offer img__offer__first" src={img} alt="Present" />
                    </div>

                    <div className="special__text">
                        <h3>
                            {textH3}<br /> <span>{textSpan}</span>
                        </h3>
                        <p>{textP}</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default SpecialCartFirst;

SpecialCartFirst.propTypes = {
    img: PropTypes.string.isRequired,
    textH3: PropTypes.string.isRequired,
    textSpan: PropTypes.string.isRequired,
    textP: PropTypes.string.isRequired,
}