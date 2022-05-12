import React, { useState } from "react";
import PropTypes from 'prop-types';


const Question = ({ items }) => {

    const [clicked, setClicked] = useState(null);
    const toggle = (index) => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }
    return (

        <div className="accordion">
            {
                items.map((item, index) => (
                    <div 
                    key={index}
                    className="item">
                        <div
                            onClick={() => toggle(index)}
                            className="accordion-item">
                            <div className={clicked === index ? "accordion-item-header active" : "accordion-item-header"}>
                                <p>{item.actualTask}</p>
                            </div>
                        </div>

                        <div className={clicked === index ? "accordion-item-body.active" : "accordion-item-body"}>
                            <div className="accordion-item-body-content">
                                <p> {item.answer}</p>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
}

Question.propTypes = {
 items: PropTypes.any.isRequired,
}

Question.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        actualTask: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    }))
}

export default Question;