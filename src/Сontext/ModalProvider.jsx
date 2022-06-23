/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const MyContext = React.createContext();

function ModalProvider({ children }) {
  const [context, setContext] = useState(false);
  return (
    <MyContext.Provider value={[context, setContext]}>
      {children}
    </MyContext.Provider>
  );
}

export default ModalProvider;

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
