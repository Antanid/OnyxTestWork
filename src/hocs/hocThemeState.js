import React, { useEffect, useState } from 'react';
import { themes } from '../constants/theme';

const HocThemeState = (Component) => {
  function handleChange(props) {
    const getTheme = () => {
      return JSON.parse(localStorage.getItem('theme')) || false;
    };
    const [theme, setTheme] = useState(themes.light);
    const [themeBul, setThemeBul] = useState(getTheme());

    useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(themeBul));
      setTheme(themeBul ? themes.dark : themes.light);
    }, [themeBul]);
    const toggleTheme = () => {
      setThemeBul(!themeBul);
    };
    return (
      <Component
        themeButton={themeBul}
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
