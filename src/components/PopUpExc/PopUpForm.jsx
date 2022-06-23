import React from 'react';
import PropTypes from 'prop-types';

function PopUpForm({
  dateText, howMuch, phoneNumber, backToYou, book, online
}) {
  return (
    <div className="popup__backgr">
      <div className="col-lg-12">
        <div className="popup_form_h3">
          <h3>{online}</h3>
        </div>
      </div>

      <div className="col-lg-10">
        <form className="popup_form">
          <label htmlFor="1">
            <div className="label_data">
              <h5>{dateText}</h5>
            </div>
            <input id="1" type="date" name="date" />
          </label>

          <label htmlFor="2">
            <div className="label_data">
              <h5>{howMuch}</h5>
            </div>
            <input id="2" type="number" name="number" />
          </label>
        </form>
      </div>

      <div className="col-lg-10">
        <form className="popup_form">
          <label htmlFor="3">
            <div className="label_data">
              <h5>{phoneNumber}</h5>
            </div>
            <input id="3" type="phone" name="phone" />
          </label>

          <label htmlFor="4">
            <div className="label_data">
              <h5>{backToYou}</h5>
            </div>
            <input id="4" type="text" name="text" />
          </label>
        </form>
      </div>

      <div className="col-lg-12">
        <div className="popup_form_button">
          <button type="button">{book}</button>
        </div>
      </div>
    </div>
  );
}

export default PopUpForm;

PopUpForm.propTypes = {
  online: PropTypes.string.isRequired,
  dateText: PropTypes.string.isRequired,
  howMuch: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  backToYou: PropTypes.string.isRequired,
  book: PropTypes.string.isRequired,
};
