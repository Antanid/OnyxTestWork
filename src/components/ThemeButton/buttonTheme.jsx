/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './sass/Style.scss';
import DayTheme from '../../assets/img/DayTheme.png';
import NightTheme from '../../assets/img/NightTheme.png';

function ButtonTheme({ toggleTheme, themeButton }) {
  return (
    <div className="col-lg-6">
      <div className="button_theme_div">

        {
          themeButton ? (
            <div
              tabIndex={0}
              role="button"
              onKeyDown={toggleTheme}
              onClick={toggleTheme}
            >
              <img src={NightTheme} alt="nightMod" />

            </div>
          )
            : (
              <div
                tabIndex={0}
                role="button"
                onKeyDown={toggleTheme}
                onClick={toggleTheme}
              >
                <img src={DayTheme} alt="nightMod" />
              </div>
            )
        }
      </div>
    </div>
  );
}

export default ButtonTheme;

ButtonTheme.propTypes = {
  themeButton: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
