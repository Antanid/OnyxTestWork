import { CLOSE_POPUP_EXC, OPEN_POPUP_EXC } from './types';

export function openPopUpExc() {
  return {
    type: OPEN_POPUP_EXC
  };
}

export function closePopUpExc() {
  return {
    type: CLOSE_POPUP_EXC
  };
}
