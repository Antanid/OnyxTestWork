import React from 'react';
import PropTypes from 'prop-types';
import ButtonTest from '../../components/LanguageChange/ButtonTest';
import ButtonTheme from '../../components/ThemeButton/buttonTheme';

function ControlPanel({ toggleTheme, test }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <ButtonTest />
        <ButtonTheme
          test={test}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
}

export default ControlPanel;

ControlPanel.propTypes = {
  test: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
