import React from 'react';
import PropTypes from 'prop-types';
import ButtonTest from '../../components/LanguageChange/ButtonTest';
import ButtonTheme from '../../components/ThemeButton/buttonTheme';

function ControlPanel({ toggleTheme, themeButton }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <ButtonTest />
        <ButtonTheme
          themeButton={themeButton}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

export default ControlPanel;

ControlPanel.propTypes = {
  themeButton: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
