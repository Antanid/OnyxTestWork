/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { LOADING_STARWATS_OFF, LOADING_STARWATS_ON } from './types';

const initianalState = {
  loading: true,
};

export const LoaderRuducer = (state = initianalState, action) => {
  switch (action.type) {
    case LOADING_STARWATS_ON: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOADING_STARWATS_OFF: {
      return {
        ...state,
        loading: false
      };
    }
    default: return state;
  }
};
