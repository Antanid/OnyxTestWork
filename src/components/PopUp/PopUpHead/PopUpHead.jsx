import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';

import Close from '../../../assets/img/icons8-close.svg';

function PopUpHead({ active, setActive }) {
  return (
    <div
      tabIndex={0}
      role="button"
      className={active ? 'popup__bg active' : 'popup__bg'}
      onKeyDown={() => setActive(false)}
      onClick={() => setActive(false)}
    >
      <div
        tabIndex={0}
        role="button"
        onKeyDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <form
          className={active ? 'popup active' : 'popup'}
        >
          <div
            tabIndex={0}
            role="button"
            onKeyDown={() => setActive(false)}
            onClick={() => setActive(false)}
          >
            <img
              src={Close}
              alt="close-popup"
              className="close-popup"
            />
          </div>

          <div className="popup_text">
            Залишити заявку
          </div>
          <div className="form__all">
            <label htmlFor="first">
              <input id="secend" type="text" name="name" />
              <div className="label_text">
                Як до вас звертатись?
              </div>
            </label>

            <label htmlFor="secend">
              <input id="secend" type="tel" name="tel" />
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
    </div>
  );
}

export default PopUpHead;

PopUpHead.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
