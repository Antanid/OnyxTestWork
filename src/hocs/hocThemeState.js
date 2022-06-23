import React, { useState } from 'react';
import { themes } from '../constants/theme';

const HocThemeState = (Component) => {
  function handleChange(props) {
    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
      if (theme === themes.light) {
        setTheme(themes.dark);
      } else {
        setTheme(themes.light);
      }
    };
    return (
      <Component
        theme={theme}
        toggleTheme={toggleTheme}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    );
  }
  return handleChange;
};

export default HocThemeState;
