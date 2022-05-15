import React from "react";
import PropTypes from 'prop-types';

class PreEndView extends React.Component {
    render() {
        return (
            <div className="col-lg-10 col-sm-6">
                <div className="footer__all">
                    <div className="footer__menu">
                        <ul>
                            {
                                this.props.footerLi.map((item, index) => {
                                    return (
                                        <li key={index}><a href={item.href}>{item.text}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default PreEndView;

PreEndView.propTypes = {
    footerLi: PropTypes.any.isRequired,
}

PreEndView.propTypes = {
    footerLi: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
    }))
}