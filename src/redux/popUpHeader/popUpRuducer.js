/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { OPEN_POPUP, CLOSE_POPUP } from './types';

const initianalState = {
  bull: false
};

export const popUpRuducer = (state = initianalState, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      return {
        ...state,
        bull: true
      };
    case CLOSE_POPUP:
      return {
        ...state,
        bull: false
      };
    default:
      return state;
  }
};
