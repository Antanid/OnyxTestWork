import { OPEN_POPUP, CLOSE_POPUP } from './types';

export function openPopUp() {
  return {
    type: OPEN_POPUP
  };
}

export function closePopUp() {
  return {
    type: CLOSE_POPUP
  };
}
