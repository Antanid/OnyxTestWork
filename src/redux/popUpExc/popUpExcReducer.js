/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { OPEN_POPUP_EXC, CLOSE_POPUP_EXC } from './types';

const initianalState = {
  bullExc: false
};

export const popUpExcReducer = (state = initianalState, action) => {
  switch (action.type) {
    case OPEN_POPUP_EXC:
      return {
        ...state,
        bullExc: true
      };
    case CLOSE_POPUP_EXC:
      return {
        ...state,
        bullExc: false
      };
    default:
      return state;
  }
};
