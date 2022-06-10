import React, { Fragment } from "react";
import PropTypes from 'prop-types';


class ServiceSpanText extends React.Component {
    render() {
        const {textSpan} = this.props
        return (
            <Fragment>
                {
                  textSpan.map((item, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="services__block">
                                <div className="services__icon">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="services__text">
                                    <p>{item.textAfter}
                                        <span>{item.span}</span> {item.textBefore}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Fragment>
        )
    }
}

export default ServiceSpanText;

ServiceSpanText.propTypes = {
    textSpan: PropTypes.node.isRequired,
}

ServiceSpanText.propTypes = {
    textSpan: PropTypes.arrayOf(PropTypes.shape({
        textAfter: PropTypes.string.isRequired,
        span: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }))
}