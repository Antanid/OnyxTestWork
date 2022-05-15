import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


class HeadLogo extends React.Component {
    render() {
        const { logo } = this.props;
        return (
            <div className="col-lg-2">
                <div className="nav__logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>

            </div>
        )
    }
}

export default HeadLogo;

HeadLogo.propTypes = {
    logo: PropTypes.string.isRequired,
}