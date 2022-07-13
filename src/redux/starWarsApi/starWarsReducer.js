/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import {
  LOAD_STAR_WARS_API,
  LOAD_NEXT_STAR_WARS_API,
  LOAD_PLANET_NAME
} from './types';

const initianalState = {
  starTeam: [],
  worldName: [],
};

export const starWarsTeam = (state = initianalState, action) => {
  /*   console.log('REDUCER >>>', action.data); */
  switch (action.type) {
    case LOAD_STAR_WARS_API: {
      return {
        ...state,
        starTeam: action.data
      };
    }
    case LOAD_NEXT_STAR_WARS_API: {
      return {
        ...state,
        starTeam: action.data,
      };
    }
    case LOAD_PLANET_NAME: {
      return {
        ...state,
        worldName: [...state.worldName.slice(0, 9), action.data],

      };
    }
    default: return state;
  }
};
