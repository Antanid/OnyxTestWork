import React, { useContext } from 'react';
import MyContext from '../Сontext/PopUpContext/MyContext';

const HOC = (Component) => {
  function HandleChange(props) {
    const [context, setContext] = useContext(MyContext);

    const open = () => {
      setContext(true);
      console.log(context);
    };

    const close = () => {
      setContext(false);
    };
    return (
      <Component
        context={context}
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
