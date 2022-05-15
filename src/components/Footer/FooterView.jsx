import React from "react";
import PropTypes from 'prop-types';

class FooterView extends React.Component {
    render() {
        return (
            <div className="col-lg-12">
                <div className="footer__text">
                    <h3>
                        {this.props.children}
                    </h3>
                </div>
            </div>
        );
    }
}

export default FooterView;

FooterView.propTypes = {
    children: PropTypes.string.isRequired,
}