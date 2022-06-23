/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './sass/Style.scss';

function ButtonTheme({ toggleTheme }) {
  return (
    <div className="button_theme_div">
      <div>
        <input type="checkbox" id="toggle" className="toggle--checkbox" />
        <label
          role="presentation"
          onKeyDown={toggleTheme}
          onClick={toggleTheme}
          htmlFor="toggle"
          className="toggle--label"
        >
          <span className="toggle--label-background" />
        </label>
        <div className="background" />
      </div>
    </div>
  );
}

export default ButtonTheme;

ButtonTheme.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
