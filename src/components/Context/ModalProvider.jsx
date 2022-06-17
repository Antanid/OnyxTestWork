import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function ModalProvider({ children }) {
  const [context, setContext] = useState(false);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MyContext.Provider value={[context, setContext]}>
      {children}
    </MyContext.Provider>
  );
}

export default ModalProvider;

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
