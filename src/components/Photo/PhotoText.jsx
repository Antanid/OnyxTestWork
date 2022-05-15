import React from 'react';
import PropTypes from 'prop-types';


class PhotoText extends React.Component {
    render() {
        return (
            <div className="col-lg-12">
                <div className="photo__text">
                    <h2 id="photo__h2" className="photo__h2">{this.props.children}</h2>
                </div>
            </div>
        )
    }

}

export default PhotoText;

PhotoText.propTypes = {
    children: PropTypes.string.isRequired,
}