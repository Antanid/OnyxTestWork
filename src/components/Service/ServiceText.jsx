import React, { Fragment } from "react";
import PropTypes from 'prop-types';

class ServiceText extends React.Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.text.map((item, index) => {
                        return (
                            <div key={index} className="col-lg-4">
                                <div className="services__block">
                                    <div className="services__icon">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="services__text">
                                        <p>{item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default ServiceText;

ServiceText.propTypes = {
    text: PropTypes.node.isRequired,
}

ServiceText.propTypes = {
    text: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    })),
}