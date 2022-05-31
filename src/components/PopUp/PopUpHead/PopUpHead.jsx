import React from "react";
import PropTypes from 'prop-types';
import './Style.scss'


import Close from "../../../assets/img/icons8-close.svg";

const PopUpHead = ({ active, setActive }) => {
    return (
        <div className={active ? 'popup__bg active' : 'popup__bg'} onClick={() => setActive(false)}>
            <form className={active ? "popup active" : 'popup'} onClick={e => e.stopPropagation()}>
                <img onClick={() => setActive(false)} src={Close} alt="close-popup" className="close-popup" />
                <div className="popup_text">
                    Залишити заявку
                </div>
                <div className="form__all">
                    <label>
                        <input type="text" name="name" />
                        <div className="label_text">
                            Як до вас звертатись?
                        </div>
                    </label>

                    <label>
                        <input type="tel" name="tel" />
                        <div className="label_text">
                            Телефон або WhatsApp
                        </div>
                    </label>

                    <div className="form_button">
                        <button type="submit">
                            Надіслати
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PopUpHead;

PopUpHead.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
}

