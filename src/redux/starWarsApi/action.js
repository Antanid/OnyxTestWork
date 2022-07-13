/* eslint-disable import/prefer-default-export */
import {
  LOAD_STAR_WARS_API,
  LOAD_NEXT_STAR_WARS_API,
  LOAD_PLANET_NAME
} from './types';

export function loadApiStarWars(data) {
  return {
    type: LOAD_STAR_WARS_API,
    data
  };
}

export function loadNextApiStarWars(data) {
  return {
    type: LOAD_NEXT_STAR_WARS_API,
    data
  };
}

export function loadPlanetName(text) {
  return {
    type: LOAD_PLANET_NAME,
    data: {
      text
    }
  };
}
