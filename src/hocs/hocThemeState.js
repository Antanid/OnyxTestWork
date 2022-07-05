import React, { useEffect, useState } from 'react';
import { themes } from '../constants/theme';

const HocThemeState = (Component) => {
  function handleChange(props) {
    const getTheme = () => {
      return JSON.parse(localStorage.getItem('theme')) || false;
    };
    const [theme, setTheme] = useState(themes.light);
    const [test, setTest] = useState(getTheme());

    useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(test));
      if (test === false) {
        setTheme(themes.light);
      } if (test === true) {
        setTheme(themes.dark);
      }
      console.log(test);
    }, [test]);
    const toggleTheme = () => {
      if (test === false) {
        setTest(true);
      } if (test === true) {
        setTest(false);
      }
    };
    return (
      <Component
        test={test}
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
