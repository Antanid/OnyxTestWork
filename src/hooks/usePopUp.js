import { useState } from 'react';

export default function usePopUp() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const open = (e) => {
    setOpenPopUp(true);
    e.preventDefault();
  };

  const close = (e) => {
    setOpenPopUp(false);
    e.preventDefault();
  };
  return {
    open, close, openPopUp
  };
}
