/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  LOAD_PLANET_NAME
} from './types';

const initianalState = {
};

export const WorldReducer = (state = initianalState, action) => {
  switch (action.type) {
    case LOAD_PLANET_NAME: {
      return {
        ...state,
        [action.homeworld]: action.data,
      };
    }
    default: return state;
  }
};
