import React from "react";
import PropTypes from 'prop-types';



class GiftImg extends React.Component {
    render() {
        const { gift } = this.props;
        return (
            <div className='col-lg-6 col-xs-12'>
                <div className="gift__img">
                    <img src={gift} alt="gift" />
                </div>
            </div>
        )
    }
}

export default GiftImg;

GiftImg.propTypes = {
    gift: PropTypes.string.isRequired
}