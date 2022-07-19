/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  LOAD_STAR_WARS_API,
} from './types';

const initianalState = {
  starTeam: [],
};

export const PeopleReducer = (state = initianalState, action) => {
  switch (action.type) {
    case LOAD_STAR_WARS_API: {
      return {
        ...state,
        starTeam: action.data
      };
    }
    default: return state;
  }
};
