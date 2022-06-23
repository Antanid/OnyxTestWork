import React from 'react';
import PropTypes from 'prop-types';
import { themes } from '../constants/theme';

export const ThemeContext = React.createContext(themes.light);

function ThemeProvider({ children, theme }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
};
