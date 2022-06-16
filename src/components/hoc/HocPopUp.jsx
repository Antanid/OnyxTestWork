import React from 'react';

const HOC = (Component) => {
  function HandleChange(props) {
    const open = (setActive) => {
      setActive(true);
    };

    const close = (setActive) => {
      setActive(false);
    };
    return (
      <Component
        close={close}
        open={open}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    );
  }
  return HandleChange;
};

export default HOC; 
