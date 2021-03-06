import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './sass/Style.scss';

import Close from '../../assets/img/icons8-close.svg';
import useInput from '../../hooks/useInput';
import Buttons from '../Button/Buttons';

function PopUpHead({ ClosePopUp }) {
  const inputNumber = useInput('', 14);
  const inputName = useInput('', 40);
  const { t } = useTranslation('', { keyPrefix: 'popUpHead' });
  return (
    <div
      tabIndex={0}
      role="button"
      className="popup__bg"
      onKeyDown={ClosePopUp}
      onClick={ClosePopUp}
    >
      <div
        tabIndex={0}
        role="button"
        onKeyDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <form
          className="popup"
        >
          <div
            tabIndex={0}
            role="button"
            onKeyDown={ClosePopUp}
            onClick={ClosePopUp}
          >
            <img
              src={Close}
              alt="close-popup"
              className="close-popup"
            />
          </div>

          <div className="popup_text">
            {t('HeaderText')}
          </div>
          <div className="form__all">
            <label htmlFor="first">
              <input
                value={inputName.value}
                onChange={inputName.onChange}
                id="secend"
                type="text"
                name="name"
              />
              <div className="label_text">
                {t('LabelText')}
              </div>
            </label>

            <label htmlFor="secend">
              <input
                value={inputNumber.value}
                onChange={inputNumber.onChange}
                id="secend"
                type="tel"
                name="tel"
              />
              <div className="label_text">
                {t('PhoneNumber')}
              </div>
            </label>

            <div className="form_button">
              <Buttons>
                {t('SentText')}
              </Buttons>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopUpHead;

PopUpHead.propTypes = {
  ClosePopUp: PropTypes.func.isRequired,
};
