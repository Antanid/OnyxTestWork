import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Style.scss';


function AdditionalComp({ service }) {
    return (
        <Fragment>
            {
                service.map((item, index) => {
                    return (
                        <div key={index} className="col-lg-3 col-sm-6">
                            <div className='additional__services'>
                                <div className='additional__img'>
                                    <img src={item.img} alt="evacuation" />
                                </div>
                                <div className='additional__text'>
                                    <h4>{item.text}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}

AdditionalComp.propTypes = {
    service: PropTypes.node.isRequired,
}

AdditionalComp.propTypes = {
    service: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
    }))
}


export default AdditionalComp